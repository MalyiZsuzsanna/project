import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { truncatedStory } from '../utils';
import { elapsedTime } from '../utility/elapsedTime';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpOffAlt from '@mui/icons-material/ThumbUpOffAlt';
import { useNavigate } from 'react-router-dom';

const maxlenght=60

export const PostCards=({id,title,description,photoUrl,likesCount,timestamp,author,category})=> {
  const navigate=useNavigate()
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-sm">{elapsedTime(timestamp)}</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <ThumbUpOffAltIcon sx={{color:'blue'}}/>{likesCount}
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src={photoUrl}
          loading="lazy"
          alt={title}
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">{category}</Typography>
          <Typography fontSize="lg" fontWeight="lg">
          {truncatedStory(description,maxlenght)}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
          onClick={()=>navigate('details/'+id)}
        >
          read more
        </Button>
      </CardContent>
    </Card>
  );
}