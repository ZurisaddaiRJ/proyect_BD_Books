import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

const CommentComponent = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() === '') {
      return; // Evitar agregar comentarios vacíos
    }

    const comment = { id: Date.now(), content: newComment };
    setComments((prevComments) => [...prevComments, comment]);
    setNewComment('');
  };

  return (
    <View>
      <FlatList
        class = "comment-list"
        data={comments}
        renderItem={({ item }) => <Text>{item.content}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      <View>
        <TextInput
          class="comment"
          placeholder="Agregar comentario"
          onChangeText={(text) => setNewComment(text)}
          value={newComment}
        />
        <Button class="btnAgregar" title="Agregar" onPress={handleAddComment} />
      </View>
    </View>
  );
};

export default CommentComponent;
