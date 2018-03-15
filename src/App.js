import React, { Component } from 'react'
import { Table, Button, Divider } from 'antd'
import './App.css'

import { apiUrl, tableStructure } from './config'

class App extends Component {
  state = {
    loading: true,
    users: []
  }

  componentWillMount() {
    this.clickHandler()
  }

  clickHandler = async () => {
    this.setState({
      loading: true
    })

    const { results } = await fetch(apiUrl)
      .then(res => res.json())

    // prepare data for table
    results.forEach((user, i) => {
      user.key = i

      user.firstName = user.name.first[0].toUpperCase() +
        user.name.first.substr(1)
      user.lastName = user.name.last[0].toUpperCase() +
        user.name.last.substr(1)

      delete user.name
    })

    this.setState({
      loading: false,
      users: results
    })
  }

  render() {
    const { users, loading } = this.state

    return (
      <div className='App'>
        <Divider>Таблица пользователей</Divider>

        <Table
          dataSource={users}
          columns={tableStructure}
          pagination={false}
        />

        <Button
          type='primary'
          icon='sync'
          style={{
            float: 'right',
            marginTop: '15px'
          }}
          loading={loading}
          onClick={this.clickHandler}
        >
          Обновить
        </Button>
      </div>
    )
  }
}

export default App
