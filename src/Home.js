function Home() {

    const handleClick = (e) => {
        console.log('Hello you clicked me', e);
    }

    const handleClickName = (name, e) => {
        console.log('Hello ' + name, e.target)
    }
    return(
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickName("Yellow" ,e )}>Click me again</button>
        </div>
    )
}

export default Home;