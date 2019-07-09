import React, { Component } from 'react';
import SentenceHead from './sentenceHead';
import OneSentence from './oneSentence';
import SentenceBottom from './sentenceBottom'
import './sentenceHead.css';

class SentenceHome extends Component {
    render() {
        return (
            <div>
                <SentenceHead></SentenceHead>
                <OneSentence></OneSentence>
                <SentenceBottom></SentenceBottom>
            </div>
        )
    }
}
export default SentenceHome;