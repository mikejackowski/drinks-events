import styled from 'styled-components'
import { useState, useEffect } from 'react'
import {DebounceInput} from 'react-debounce-input'
import axios from 'axios'
import { Event } from '../../pages/e/event.types'
import EventThumbnail from '../event/EventThumbnail'

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
  const [pageNo, selectPageNo] = useState(0)
  const [pageSize, setPageSize] = useState(5)
  const [searchQ, setSearchQ] = useState('')
  const [allEvents, setEvents] = useState<Event[]>([])
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [eventsNo, setEventsNo] = useState(0)
  const [totalPages, setTotalPages] = useState(1)

  /**
   * the API does not return total number of items so in order to create proper pagination this have to be done manually
   */
  const createPagination = async () => {
    let data = [];
    let page = 1;
    while(true) {
      const r = await axios.get(`https://mock-api.drinks.test.siliconrhino.io/events?page=${page}&pageSize=20`);
      page++;
      data.push(...r.data);
      if(r.data.length === 0) {
        setEventsNo(r.data.length)
        break;
      }
    }
    setTotalPages(Math.floor(eventsNo / pageSize) + 1)
  }

  useEffect(() => {
    createPagination();
  }, [])

  useEffect(() => {
    getEvents()
  }, [pageSize, pageNo, searchQ])

  useEffect(() => {
    setTotalPages(Math.floor(eventsNo / pageSize) + 1)
  }, [pageSize])

  const getEvents = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`https://mock-api.drinks.test.siliconrhino.io/events?page=${pageNo}&pageSize=${pageSize}&search=${searchQ}`)
      const evnts: Event[] = res.data
      setEvents(evnts)
      setLoading(false)
    }
    catch (err) {
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {}, [])
  if (isError) {
    return (
      <div>Failed to load data.</div>
    )
  }

  const pageButtons = () => {
    let buttons: JSX.Element[] = []
    for (let i = 0; i < totalPages; i++) {
      buttons.push(
        <SearchParamButton key={i} isSelected={pageNo === i} onClick={() => selectPageNo(i)}>{i+1}</SearchParamButton>
      )
    }
    return buttons
  }

  return (
    <SearchWrapper>
      <SearchInput
        minLength={1}
        debounceTimeout={300}
        placeholder={'asdf'}
        //@ts-ignore
        onChange={event => setSearchQ(event.target.value)}
      />
      <div>events: </div>
      {
        isLoading ?
        <div>loading...</div>
      :
        allEvents.map((event) => (
          <EventThumbnail
            key={event.id}
            id={event.id}
            time={event.time}
            title={event.title}
            creator={event.creator}
            guests={event.guests}
            type={event.type}
            location={event.location}
            comments={event.comments}
          />
        ))
      }
      <PageNumberButtonWrapper>
        <div>Select page:</div>
        {pageButtons()}
        <div>Items per page:</div>
        <SearchParamButton isSelected={pageSize === 5} onClick={() => setPageSize(5)}>5</SearchParamButton>
        <SearchParamButton isSelected={pageSize === 15} onClick={() => setPageSize(15)}>15</SearchParamButton>
        <SearchParamButton isSelected={pageSize === 22} onClick={() => setPageSize(25)}>25</SearchParamButton>
      </PageNumberButtonWrapper>
    </SearchWrapper>
  )
}

export default Search