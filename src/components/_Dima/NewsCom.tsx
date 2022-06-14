import { _mockProjekts } from '../../_mock/referenzen/referenzen';
//import AnimatedStartLayout from '../../layouts/animated/AnimatedStartLayout';

import { Box, Card, CardContent, Container, Paper, Stack, Typography } from "@mui/material";
import parse from 'html-react-parser';

import { Mail } from "src/components/_Reusable/Mail";
import { Job, News } from "src/utils/TS/interface";


// TODO use location instead use route
export function NewsCom({ news, dark }: { news: News, dark: boolean }) {
  const { id,
    photos,
    video,
    date,
    title,
    description,
    link, } = news;

  return (
    <Card sx={dark ? { backgroundColor: 'background.between' } : { backgroundColor: 'background.paper' }}>
      <CardContent>
        <Stack
          direction="column"
          spacing={8}
        >
          <Stack
            direction="row"
            justifyContent="flex-end"
          >
            <Typography
              variant="body2"
              component="div"
            >
              {id}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
