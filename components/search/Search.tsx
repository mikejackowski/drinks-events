import styled from 'styled-components'
import { useState, useEffect } from 'react'
import {DebounceInput} from 'react-debounce-input'
import axios from 'axios'
import { Event } from '../../pages/e/event.types'
import EventThumbnail from '../event/EventThumbnail'
import Link from 'next/link'
import React from 'react'

const SearchWrapper = styled.div`
`

const SearchParamButton = styled.div<{isSelected: boolean}>`
  display: grid;
  justify-content: center;
  place-items: center;
  font-weight: bold;
  border: 1px solid black;
  background: ${(props) => props.isSelected ? 'aqua' : 'none'};
`

const SearchInput = styled(DebounceInput)`
  width: 50%;
  border: 1px solid black;
`

const PageNumberButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`



const Search = () => {
  const [pageNo, setPageNo] = useState(0)
  const [pageSize, setPageSize] = useState(5)
  const [searchQ, setSearchQ] = useState('')
  const [allEvents, setEvents] = useState<Event[]>([])
  const [isLoading, setLoading] = useState(false)

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

  const pageButtons = () => {
    let buttons: JSX.Element[] = []
    let displayEvents = allEvents.length;
    if (searchQ !== '') {
      displayEvents = allEvents.filter((event) => event.title.includes(searchQ)).length
    }
    let totalPages = Math.floor(displayEvents / pageSize) + 1
    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <SearchParamButton key={i} isSelected={pageNo === i} onClick={() => setPageNo(i)}>{i+1}</SearchParamButton>
      )
    }
    return buttons
  }
  let currentEvents: Event[] = getEvents()
  return (
    <SearchWrapper onClick={() => {}}>
      <SearchInput
        minLength={1}
        debounceTimeout={300}
        value={searchQ}
        placeholder={'asdf'}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPageNo(0)
          setSearchQ(event.target.value)
        }}
      />
      <div>events: </div>
      {
        isLoading ?
        <div>loading...</div>
      :
        currentEvents.map((event) => (
          <Link passHref={true} key={event.id} href={'/e/[id]'} as={`/e/${event.id}`}>
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
          </Link>
        ))
      }
      <PageNumberButtonWrapper>
        <div>Select page:</div>
        {pageButtons()}
        <div>Items per page:</div>
        <SearchParamButton isSelected={pageSize === 5} onClick={() => changePageSize(5)}>5</SearchParamButton>
        <SearchParamButton isSelected={pageSize === 15} onClick={() => changePageSize(15)}>15</SearchParamButton>
        <SearchParamButton isSelected={pageSize === 25} onClick={() => changePageSize(25)}>25</SearchParamButton>
      </PageNumberButtonWrapper>
    </SearchWrapper>
  )
}

export default Search