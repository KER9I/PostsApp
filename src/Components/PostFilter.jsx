import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect';

function PostFilter({filter, setFilter}) {
    return (
        <div>
            <MyInput placeholder='Search'
                value={filter.search}
                onChange={e => setFilter({...filter, search: e.target.value})}></MyInput>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Sorted' options={[
                    { value: 'title', name: 'for named' },
                    { value: 'body', name: 'for description' }
                ]} />
        </div>
    )
}
export default PostFilter