import { Flex, Stack, Text } from "@chakra-ui/layout";
import React, {
  useState,
  useEffect,
  EventHandler,
  MouseEventHandler,
} from "react";
import { EditorPost } from "./EditorPost";
import { Input, Button } from "@chakra-ui/react";
import { BoxImage } from "./BoxImage";
import { AddPost, UpdatePost } from "../../Services/PostService";
import styles from "./EditorPost.module.css";

export default function FormNewPost({ post }: { post?: any }) {
  let [configclick, setconfigclick] = useState({
    error: false,
    loading: false,
  });
  let [postcontent, setpostcontent] = useState({
    title: post ? post.title : "",
    subtitle: post ? post.subtitle : "",
    image: post ? post.image : "",
    body: post ? post.body : "",
    loaded: false,
  });
  async function handleclick(e: any) {
    setconfigclick({ ...configclick, loading: true });
    e.preventDefault();
    let { title, subtitle, body, image } = postcontent;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("body", body);
    formData.append("image", image);
    try {
      if (post) {
        await UpdatePost(post.id, formData);
      } else {
        await AddPost(formData);
        console.log("agregando nuevo");
      }
      setpostcontent({
        title: "",
        subtitle: "",
        image: "",
        body: "",
        loaded: true,
      });
      setconfigclick({ ...configclick, loading: false });
    } catch (err: any) {
      console.log(err);
      setconfigclick({ loading: false, error: err.response });
      const timer = setTimeout(() => {
        setconfigclick({ ...configclick, error: false });
      }, 5000);
    }
  }

  return (
    <Stack border="0.5px solid #ccc" w="100%" h="750px" p="10px">
      <Input
        onChange={(e) => {
          setpostcontent({ ...postcontent, title: e.target.value });
        }}
        value={postcontent.title}
        placeholder="title "
        id="name"
        type="text"
      />
      <Input
        onChange={(e) => {
          setpostcontent({ ...postcontent, subtitle: e.target.value });
        }}
        value={postcontent.subtitle}
        placeholder="subtitle"
        type="text"
      />
      <BoxImage postcontent={postcontent} setcontent={setpostcontent} />
      <EditorPost setpostcontent={setpostcontent} postcontent={postcontent} />
      <Flex justifyContent="space-between">
        {
          <Text size="sm" color="red">
            {configclick.error}
          </Text>
        }
        <Button
          size="sm"
          w="120px"
          disabled={configclick.loading === true && true}
          colorScheme="teal"
          type="submit"
          onClick={(e) => handleclick(e)}
        >
          Create
        </Button>
      </Flex>
    </Stack>
  );
}
