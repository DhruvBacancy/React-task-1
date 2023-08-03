import { useState } from 'react';
import InputComponent from './InputComponent';
import ViewComponent from './ViewComponent';

const ParentComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [listItems, setListItems] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim() !== '') {
            setListItems((prevItems) => [...prevItems, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteItem = (index) => {
        setListItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    return (
        <div>
            <InputComponent
                value={inputValue}
                onChange={handleInputChange}
                onAdd={handleAddItem}
                disabled={inputValue.trim() === ''}
            />
            <ViewComponent items={listItems} onDelete={handleDeleteItem} />
        </div>
    );
};

export default ParentComponent;
