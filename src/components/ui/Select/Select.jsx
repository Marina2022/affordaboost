import ReactSelect from 'react-select'

const Select = ({selectChangeHandler, options, defaultValue = null, placeholder = null}) => {
  return (
    <ReactSelect
      options={options}
      onChange={selectChangeHandler}
      placeholder={placeholder}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: '#ddd',
          primary: '#777',
          neutral50: '#08291E',
        },
      })}
      defaultValue={defaultValue}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          height: 48,
          paddingLeft: '4px',
          fontSize: 16,
          borderColor: '#0ECFAC',
          cursor: 'pointer',
          background: '#B8EADC',
          width: '100%',
          fontFamily: 'Arial'
        }),

        indicatorSeparator: (baseStyles) => ({
          ...baseStyles,
          display: 'none',
        }),

        dropdownIndicator: (baseStyles) => ({
          ...baseStyles,
          color: '#6c757d',
        }),

        menu: (baseStyles) => ({
          ...baseStyles,
          background: '#B8EADC',
          fontFamily: 'Arial'
        }),

        option: (baseStyles) => ({
          ...baseStyles,
          fontSize: 16,
          lineHeight: 1.4,
          color: '#08291E',
          background: '#B8EADC',

        }),
      }}
    />
  );
};

export default Select;
