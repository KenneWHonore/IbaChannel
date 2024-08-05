 export const getImage = (post, imageSize) => {
    let size = imageSize;
  
    if (typeof post === 'undefined' || post == null) {
      return '';
    }
  
    if (typeof size === 'undefined') {
      size = 'medium';
    }
  
    if (typeof post.better_featured_image === 'undefined') {
      // check the _embbed
      if (typeof post._embedded !== 'undefined') {
        if (typeof post._embedded['wp:featuredmedia'][0] !== 'undefined') {
          if (typeof post._embedded['wp:featuredmedia'][0].media_details !== 'undefined') {
            if (typeof post._embedded['wp:featuredmedia'][0].media_details.sizes[size] !== 'undefined') {
              return post._embedded['wp:featuredmedia'][0].media_details.sizes[size].source_url;
            }
          }
        }
      }
  
      return '';
    }
  
    let imageURL =
      typeof post.better_featured_image !== 'undefined' && post.better_featured_image != null
        ? post.better_featured_image.source_url
        : '';
  
    if (post.better_featured_image == null) {
      return imageURL;
    }
  
    if (imageURL == '' && typeof post.better_featured_image != null) {
      imageURL = post.better_featured_image.source_url;
    }
  
    if (!imageURL) {
      return Images.image_placeholder;
    }
  
    return imageURL;
  };