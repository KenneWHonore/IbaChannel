import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { decode } from 'html-entities';

const Card = ({ item }) => {
  const encodedTitle = decode(item.title.rendered);
  const imageUrl = getImage(item, 'medium'); // Use medium size image by default

  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image
          style={{ resizeMode: 'cover', width: 100, height: 100 }}
          source={{ uri: imageUrl }}
        />
      ) : (
        // If no image is found, you can display a placeholder
        <View style={{ width: 100, height: 100, backgroundColor: 'lightgray' }} />
      )}
      <Text>{encodedTitle}</Text>
    </View>
  );
};

const getImage = (post, imageSize = 'medium') => {
  // Ensure post is defined
  if (!post) {
    return '';
  }

  // Try to find an image using the `better_featured_image` property
  if (post.better_featured_image && post.better_featured_image.source_url) {
    return post.better_featured_image.source_url;
  }

  // If not found, try the `_embedded` property
  if (post._embedded && post._embedded['wp:featuredmedia']) {
    const media = post._embedded['wp:featuredmedia'][0];
    if (media && media.media_details && media.media_details.sizes[imageSize]) {
      return media.media_details.sizes[imageSize].source_url;
    }
  }

  // If no image is found, return an empty string or a placeholder
  return ''; // Or you can return Images.image_placeholder if you have it defined
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    padding: 16,
    marginVertical: 8,
  },
});

export default Card;