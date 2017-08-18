import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import TextInput from 'grommet/components/TextInput';
import FormField from 'grommet/components/FormField';
import NumberInput from 'grommet/components/NumberInput';

const Form = ({name, price, setName, setPrice}) => (
    <Box
        justify='center'
        align='center'
        pad='medium'
    >
        <h3>{'Form'}</h3>
        <FormField>
            <TextInput
                value={name}
                placeHolder='Name'
                onDOMChange={(_name) => setName(_name.target.value)}
            />
        </FormField>
        <FormField>
            <NumberInput
                value={price}
                type='number'
                onChange={(_price) => setPrice(_price.target.value)}
            />
        </FormField>
    </Box>
);

Form.propTypes = {
    name: PropTypes.string,
    price: PropTypes.string,
    setName: PropTypes.func,
    setPrice: PropTypes.func
};

export default Form;