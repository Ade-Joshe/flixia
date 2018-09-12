import React from 'react';
import '../general_style.css'
// import Header from '../components/header'
// import Footer from '../components/footer';
import Cards from '../components/card';
import "./FAQ.css"


const FAQ = () => {
return (
    <div>
        <div className="container general">
            <h1>checkout our awesome personnels</h1>
            <Cards 
                data={[
                    {
                        key: Date.now(),
                        aUrl: '../components/end.jpg',
                        title: 'the big bad wolf',
                        descr: "the wolf was very bad"
                    },
                    {
                        key: Date.now(),
                        aUrl: '../components/end.jpg',
                        title: 'the big bad wolf',
                        descr: "the wolf was very bad"
                    },
                    {
                        key: Date.now(),
                        aUrl: '../components/end.jpg',
                        title: 'the big bad wolf',
                        descr: "the wolf was very bad"
                    },
                    {
                        key: Date.now(),
                        aUrl: '../components/end.jpg',
                        title: 'the big bad wolf',
                        descr: "the wolf was very bad"
                    },                    
                    {
                        key: Date.now(),
                        aUrl: '../components/end.jpg',
                        title: 'the big bad wolf',
                        descr: "the wolf was very bad"
                    },
                ]}
            />
        </div>
        {/* <Footer /> */}
    </div>
)
}

// export default '../components/end.jpg';
export default FAQ;