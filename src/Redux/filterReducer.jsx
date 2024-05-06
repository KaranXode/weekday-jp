const initialState = {
    minExperience: 0,
    companyName: '',
    location: '',
    remote: '',
    techStack: '',
    role: '',
    minBasePay: 0
  };
  
  const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MIN_EXPERIENCE':
        return { ...state, minExperience: action.payload };
      case 'SET_COMPANY_NAME':
        return { ...state, companyName: action.payload };
      case 'SET_LOCATION':
        return { ...state, location: action.payload };
      case 'SET_REMOTE':
        return { ...state, remote: action.payload };
      case 'SET_TECH_STACK':
        return { ...state, techStack: action.payload };
      case 'SET_ROLE':
        return { ...state, role: action.payload };
      case 'SET_MIN_BASE_PAY':
        return { ...state, minBasePay: action.payload };
      default:
        return state;
    }
  };
  
  export default filtersReducer;
  