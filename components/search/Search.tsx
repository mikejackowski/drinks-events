import styled from 'styled-components'
import { useState, useEffect } from 'react'
import {DebounceInput} from 'react-debounce-input'
import axios from 'axios'
import { Event } from '../common/event.types'
import EventThumbnail from '../event/EventThumbnail'
import Link from 'next/link'
import React from 'react'
import { Colors, BoxShadows } from '../common/colors'
import { FlexWrapper } from '../common/common'
import Loader from 'react-loader-spinner'

const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  padding: 20px;
  margin-top: 10px;
  font-family: 'Lato', sans-serif;
  box-sizing: border-box;
`

const SearchParamButton = styled.button<{isSelected: boolean}>`
  font-weight: bold;
  align-self: center;
  height: fit-content;
  width: 2em;
  font-size: 12px;
  text-align: center;
  border-radius: 5px;
  margin: 5px;
  padding: 5px;
  border: none;
  background: ${(props) => props.isSelected ? Colors.green : Colors.white};
  box-shadow: ${(props) => props.isSelected ? BoxShadows.focusedBoxShadow : BoxShadows.unfocusedBoxShadow};
`

const SearchInput = styled(DebounceInput)`
  width: 100%;
  padding: 15px 0 15px 10px;
  line-height: 40px;
  font-size: 30px;
  caret-color: ${Colors.gold};
  color: ${Colors.black};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${Colors.gray};
    margin-left: 15px;
    font-weight: 300;
    font-size: 1em;
    font-size: 30px;

    @media screen and (max-width: 535px) {
      font-size: 0.6em;
    }
  }
`

const PageNumberButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media screen and (max-width: 535px) {
    flex-wrap: wrap;
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  padding: 10px;
`

const SearchHeader = styled.h1`
  padding-top: 10px;
  margin: 0;
  color: ${Colors.black};
`

const EventsWrapper = styled(FlexWrapper)`
  justify-content: space-around;
`

const PageHeaders = styled.h2`
  color: ${Colors.black};
  font-size: 20px;
  font-weight: 300px;
  margin-right: 5px;
`

const Search = () => {
  const [pageNo, setPageNo] = useState(0)
  const [pageSize, setPageSize] = useState(5)
  const [searchQ, setSearchQ] = useState('')
  const [allEvents, setEvents] = useState<Event[]>([])
  const [isLoading, setLoading] = useState(false)
  const textInputRef = React.createRef<HTMLInputElement>();
  /**
   * setting up local state as database
   */
  const getInitialData = async () => {
    let data = [];
    let page = 1;
    setLoading(true)
    while(true) {
      const r = await axios.get(`https://mock-api.drinks.test.siliconrhino.io/events?page=${page}&pageSize=20`);
      page++;
      data.push(...r.data);
      if(r.data.length === 0) break;
    }
    setEvents(data)
    setLoading(false)
  }

  useEffect(() => {
    getInitialData();
    textInputRef.current ? textInputRef.current.focus() : null
  }, [])

  const getEvents = () => {
    let displayevents: Event[] = []
    if (searchQ !== '') {
      displayevents = allEvents.filter((event) => event.title.toLowerCase().includes(searchQ.toLowerCase()))
      return displayevents.slice(pageNo*pageSize, pageNo*pageSize+pageSize)
    } else {
      return allEvents.slice(pageNo*pageSize, pageNo*pageSize+pageSize)
    }
  }

  const changePageSize = (newSize: number) => {
    setPageSize(newSize)
    if (newSize > allEvents.length) {
      setPageNo(0)
    }
  }

  const getPageButtons = () => {
    let displayEvents = allEvents.length;
    if (searchQ !== '') {
      displayEvents = allEvents.filter((event) => event.title.includes(searchQ)).length
    }
    let totalPages = Math.floor(displayEvents / pageSize) + 1
    return [...Array(totalPages).keys()];
  }

  let buttons: number[] = getPageButtons();
  let currentEvents: Event[] = getEvents()
  return (
    <SearchWrapper>
      <SearchInput
        minLength={1}
        inputRef={textInputRef}
        debounceTimeout={400}
        value={searchQ}
        placeholder={`Type anything to search. Try Silicon Rhino`}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPageNo(0)
          setSearchQ(event.target.value)
        }}
      />
      <FlexWrapper>
        <SearchHeader>Events:</SearchHeader>
        {isLoading ?
        <EventsWrapper>
          <Loader
            type="Puff"
            color={Colors.green}
            height={100}
            width={100}
          />
        </EventsWrapper>
        :
          <EventsWrapper>
            {currentEvents.length > 0 ?
              currentEvents.map((event) => (
                <Link key={event.id} href={'/e/[id]'} as={`/e/${event.id}`}>
                  <StyledLink>
                    <EventThumbnail
                      id={event.id}
                      time={event.time}
                      title={event.title}
                      creator={event.creator}
                      guests={event.guests}
                      type={event.type}
                      location={event.location}
                      comments={event.comments}
                    />
                  </StyledLink>
                </Link>
              ))
              :
              <div>No events :(</div>
            }
          </EventsWrapper>
        }
        <PageNumberButtonWrapper>
          <FlexWrapper>
            <PageHeaders>Select page:</PageHeaders>
            {buttons.map((pageNumber) => (
              <SearchParamButton key={pageNumber} isSelected={pageNo === pageNumber} onClick={() => setPageNo(pageNumber)}>{pageNumber+1}</SearchParamButton>
            ))}
          </FlexWrapper>
          <FlexWrapper>
            <PageHeaders>Items per page:</PageHeaders>
            <SearchParamButton isSelected={pageSize === 5} onClick={() => changePageSize(5)}>5</SearchParamButton>
            <SearchParamButton isSelected={pageSize === 15} onClick={() => changePageSize(15)}>15</SearchParamButton>
            <SearchParamButton isSelected={pageSize === 25} onClick={() => changePageSize(25)}>25</SearchParamButton>
          </FlexWrapper>
        </PageNumberButtonWrapper>
      </FlexWrapper>
    </SearchWrapper>
  )
}

export default Search