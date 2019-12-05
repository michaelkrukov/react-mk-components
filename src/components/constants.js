export const theme = {
    colors: {
        'primary': '#3f9ef3',
        'secondary': '#E0E0E0',
        'danger': '#dc3545',
        'success': '#28a745',
        'warning': '#f8ac19',
        'info': '#17a2b8',
        'dark': '#343a40',
        'light': '#f8f9fa',
    },
    sizes: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
    },
    csizes: {
        'sm': '540px',
        'md': '720px',
        'lg': '960px',
        'xl': '1140px',
    }
}

export const getColorNameFromProps = (props) => {
    for (const name of Object.keys(theme.colors)) {
        if (props[name]) {
            return name;
        }
    }

    return 'secondary'; // default
}

export const getColorFromTheme = (color, providedTheme) => {
    return (providedTheme && providedTheme.colors[color]) || theme.colors[color];
}
