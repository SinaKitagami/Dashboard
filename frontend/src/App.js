import React from 'react';
import Header from './components/header';

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

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = { list };
    }

    render() {
        return (
            <Header />
        );
    }
}

export default App;