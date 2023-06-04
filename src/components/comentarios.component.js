import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { ListGroup } from 'react-bootstrap';
import KafkaService from "../services/kafka.service";

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

  function saveComment(e, status) {

    let data = {
      id: 0,
      status: status
    };

    console.log(JSON.stringify(data));

    KafkaService.comment("save-comment");
    e.preventDefault();
  }

  return (
    <View>
      <FlatList
        class="comment-list"
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
        <Button class="btnAgregar" title="Agregar" onPress={handleAddComment}
          className={`comment `}
          onClick={(e) => {
            e.preventDefault();
            saveComment(e, 1)
          }} />
        <ListGroup>
          {comments.map((comment) => (
            <ListGroup.Item key={comment.id}>
              {comment.content}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </View>
    </View>
  );
};

export default CommentComponent;
