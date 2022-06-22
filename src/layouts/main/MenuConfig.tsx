// routes
import { PATH_DIMA, PATH_JOBS, PATH_KONTAKT, PATH_NEWS, PATH_PROJEKTE, PATH_WEBCAMS } from '../../routes/paths';
// components
//import { PATH_AFTER_LOGIN } from 'src/config/config';
// components

// ----------------------------------------------------------------------


export const menuConfigAdmin = [
  {
    title: '+ Projekt',
    path: PATH_PROJEKTE.addProject,
  },
];

export const menuConfigSecond = [
  {
    title: 'Dima',
    path: 'dima/',
    children: [
      {
        subheader: '',
        items: [
          /*
                    {
                      title: 'Unternehmung',
                      path: PATH_DIMA.unternehmung
                    },
                    {
                      title: 'Philosophie',
                      path: PATH_DIMA.philosophie
                    },
                    */
          {
            title: 'Teams',
            path: PATH_DIMA.teams
          },
        ],
      },
    ],
  },
  {
    title: 'Projekte',
    path: PATH_PROJEKTE.projekte,
  },
  /*
    {
      title: 'News',
      path: PATH_NEWS.news,
    },
  
    {
      title: 'Jobs',
      path: PATH_JOBS.jobs,
    },
    */
  {
    title: 'Kontakt',
    path: PATH_KONTAKT.kontakt,
  },
  /*
  {
    title: 'Webcams',
    path: PATH_WEBCAMS.webcams,
  },
*/
];