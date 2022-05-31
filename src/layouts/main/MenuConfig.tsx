// routes
import { PATH_AUTH, PATH_KONTAKT, PATH_LINKS, PATH_NEWS, PATH_PROJEKTE, PATH_UNTERNEHMEN, PATH_WEBCAMS } from '../../routes/paths';
// components
//import { PATH_AFTER_LOGIN } from '../../config';
// components

// ----------------------------------------------------------------------


export const menuConfigMain = [
  {
    title: 'Projekte',
    path: PATH_PROJEKTE.projekte,
  },
];

export const menuConfigSecond = [
  {
    title: 'Dima',
    path: '/unternehmen',
    children: [
      {
        subheader: '',
        items: [
          { title: 'Über uns', path: PATH_UNTERNEHMEN.ueber_uns },
          { title: 'Leistungen', path: PATH_UNTERNEHMEN.leistungen },
          { title: 'Mitarbeitern', path: PATH_UNTERNEHMEN.mitarbeitern },
          { title: 'Jobs', path: PATH_UNTERNEHMEN.jobs },

        ],
      },
    ],
  },
  {
    title: 'Projekte',
    path: PATH_PROJEKTE.projekte,
  },
  {
    title: 'News',
    path: PATH_NEWS.news,
  },
  {
    title: 'Webcams',
    path: PATH_WEBCAMS.webcams,
  },
  {
    title: 'Kontakt',
    path: PATH_KONTAKT.kontakt,
  },
];

