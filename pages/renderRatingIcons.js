import Icon from 'react-native-vector-icons/FontAwesome';
export default renderRatingIcons = (rating) => {
    const filledStarCount = Math.floor(rating);
    const halfStar = rating - filledStarCount >= 0.5;
  
    const icons = [];
    
    for (let i = 0; i < filledStarCount; i++) {
      icons.push(<Icon key={i} name="star" size={20} color="gold" />);
    }
  
    if (halfStar) {
      icons.push(<Icon key="half" name="star-half-full" size={20} color="gold" />);
    }
  
    return icons;
  };