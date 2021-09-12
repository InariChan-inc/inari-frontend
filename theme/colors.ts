const colors = {
    transparent: 'transparent',
    white: '#FFFFFF',
    black: '#000000',
    
    // yellow
    'yellow-1': '#FFEFCD',
    'yellow-2': '#FEDF9A',
    'yellow-3': '#FECA57',
    'yellow-4': '#FF9F43',
    'yellow-5': '#CC7F36',
    'yellow-6': '#995F28',
    'yellow-7': '#FFF9ED',

    // gray
    'gray-0': '#263238',
    'gray-1': '#E9F0F7',
    'gray-2': '#D3DDE7',
    'gray-3': '#94A3B3',
    'gray-4': '#607080',
    'gray-5': '#364B63',
    'gray-6': '#1B314B',
    'gray-7': '#58585E',
    'gray-8': '#45454C',
    'gray-9': '#393940',
    'gray-10': '#2E2E33',
    'gray-11': '#171719',
    'gray-12': '#020203',
    'gray-13': '#121212',
    
    // brown
    'brown-1': '#7F5D57',
    'brown-2': '#301818',
    'brown-3': '#D3C5C2',

    // red
    'red-1': '#E71A1A',
    'red-2': '#B00020',

    // green
    'green-1': '#21A300',
    'green-2': '#166701',
};

export default colors;

export type TColors = keyof typeof colors;