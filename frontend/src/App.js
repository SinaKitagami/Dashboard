import React, { Component } from 'react';

// Mock データ
const list = [
    {
        id: 1,
        title: "1st todo",
        description: "Learn Django properly."
    },
    {
        id: 2,
        title: "Second item",
        description: "Learn Python."
    },
    {
        id: 3,
        title: "Learn HTTP",
        description: "It's important."
    }
]

class App extends Component {
    constructor (props) {
        super(props);
        this.state = { list };
    }

    render() {
        return (
            <div>
                {this.state.list.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default App;