import React from 'react';

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    
    state = {
        currentSectionIndex: 0
    };
    
    handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
    }
    
    renderSection(section, index, currentSectionIndex) {
        return (
            <li className='Accordion_item' key={index}>
                <button type='button' onClick={() => this.handleButtonClick(index)}>
                    {section.title}
                </button>
                {(currentSectionIndex === index) && <p>{section.content}</p>}
            </li>
        )
    }
    
    render(){
        const { currentSectionIndex } = this.state
        const { sections } = this.props
        return (
            <ul className='Accordion'>
                {sections.map((section, index) =>
                this.renderSection(section, index, currentSectionIndex)
                )}
            </ul>
        )
    }
}

export default Accordion;