
import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';


interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
export const GenreList = (onSelectGenre: Props, selectedGenre: Genre | null) => {
    const {data,isLoading,error} = useGenres();
    if(error) return null;
    if(isLoading) return <Spinner></Spinner>;
  return (
    <List>
        {
            data.map(genres => <ListItem paddingY="5px" key={genres.id}>
              
              <HStack  >
                <Image src={genres.image_background} boxSize="32px" borderRadius={8}></Image>
                <Button whiteSpace={"normal"} textAlign={"left"} fontWeight={genres.id===selectedGenre?.id ? 'bold' : 'normal'} onClick={()=>{onSelectGenre.onSelectGenre(genres)}} variant={"link"} fontSize="lg">{genres.name}</Button>
              </HStack>
              </ListItem>)
        }
    </List>
  )
}
