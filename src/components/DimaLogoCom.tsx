import React, { useEffect, useState, SyntheticEvent, ReactEventHandler } from 'react';

import NextLink from 'next/link';



import { Box, BoxProps } from '@mui/material';

export default function DimaLogoCom({ x, y }: { x: number, y: number }) {

    const PARTNER = 'rgb(232, 123, 69)';
    const DIMA = '#eee5dd';

    return (
        <NextLink href="/">
            <Box
                sx={{
                    width: x,
                    height: y,
                    cursor: 'pointer',
                }}>

                <svg
                    xmlns="http://www.w3.org/2000/svg"

                    width="100%"
                    height="100%"
                    viewBox="0 7 361 85"

                >
                    {/*<style type="text/css">
          .st0{fill:#69614E;}
          .st1{fill:#EF7B10;}
  </style>*/}
                    <g>
                        <g  >
                            <path
                                //class="st0" 
                                fill={DIMA}
                                d="M133.76,22.39v32.06c0,0.82,0.67,1.49,1.49,1.49h10.67h1.23c0.82,0,1.49-0.67,1.49-1.49v-0.29l0-41.63
			c0-0.65-0.53-1.18-1.18-1.18c-0.25,0-0.48,0.08-0.67,0.21l-11.54,8.05C134.34,20.21,133.76,21.22,133.76,22.39z"/>
                            <path
                                //class="st0" 
                                fill={DIMA}
                                d="M363.01,40.97L363,12.89c0-0.82-0.67-1.49-1.49-1.49h-13.38l-61.69,43.25c-0.19,0.13-0.42,0.21-0.67,0.21
			c-0.65,0-1.18-0.53-1.18-1.18V12.89c0-0.82-0.67-1.49-1.49-1.49h-9.53l-41.47,29.03c-0.07,0.05-0.23,0.12-0.39,0.12
			c-0.34,0-0.61-0.28-0.61-0.62V12.89c0-0.82-0.67-1.49-1.49-1.49h-9.57L178.6,40.43c-0.07,0.05-0.23,0.12-0.39,0.12
			c-0.34,0-0.61-0.28-0.61-0.62V12.89c0-0.82-0.66-1.49-1.49-1.49h-11.88c-0.82,0-1.49,0.66-1.49,1.49V54.5
			c0,0.82,0.67,1.49,1.49,1.49h12.31c0.74,0,1.42-0.25,1.98-0.65l36.78-25.78c0.08-0.05,0.23-0.12,0.39-0.12
			c0.34,0,0.6,0.28,0.6,0.61V54.5c0,0.82,0.67,1.49,1.49,1.49h12.25c0.75,0,1.43-0.24,1.99-0.64l36.78-25.79
			c0.07-0.05,0.23-0.12,0.39-0.12c0.34,0,0.61,0.28,0.61,0.61V54.5c0,0.82,0.66,1.49,1.48,1.49l34.32,0l41.53-29.09
			c0.08-0.05,0.23-0.12,0.39-0.12c0.34,0,0.61,0.28,0.61,0.61l0,13.58l0.01,13.81c0,0.65,0.53,1.18,1.18,1.18
			c0.25,0,0.48-0.08,0.67-0.21l11.54-8.07c0.9-0.61,1.48-1.62,1.48-2.79V40.97z"/>
                            <path
                                //class="st0"
                                fill={DIMA}
                                d="M41.12,32.26v-0.29c0-0.82,0.67-1.49,1.49-1.49h1.23H54.5c0.82,0,1.49,0.67,1.49,1.49l0,10.2v0.39
			c0,0.82,0.67,1.49,1.49,1.49h0.29l47.66,0l0.6,0c0.82,0,1.49-0.67,1.49-1.49v-0.29l-0.03-7.97c0-1.16-0.58-2.17-1.46-2.78
			l-10.54-7.38c-0.56-0.4-1.25-0.65-1.99-0.65l-40.87,0c-1.17,0-2.17-0.67-2.86-1.43l-8.28-8.87c-0.13-0.19-0.21-0.42-0.21-0.67
			c0-0.65,0.53-1.19,1.18-1.19h54.08c1.29,0,2.48,0.41,3.46,1.1l17.17,12.02c1.51,1.11,2.48,2.89,2.48,4.91l0.01,23.17
			c0,1.87-1.52,3.39-3.39,3.39H42.91h-0.29c-0.82,0-1.49-0.67-1.49-1.49L41.12,32.26z"/>
                            <path
                                //class="st1"
                                fill={PARTNER}
                                d="M208.15,79.86h17.07c0.36,0,0.62-0.27,0.62-0.61l0-4.68c0-0.34-0.26-0.61-0.59-0.61l-17.1,0V79.86z
			 M208.15,85.76v5.91h-5.91V68.05l23.58,0c2.52,0,4.01,1.52,4.29,1.79c0.41,0.43,1.79,1.79,1.79,4.32v5.49
			c0,2.53-1.25,3.9-1.65,4.33c-0.27,0.27-1.88,1.78-4.4,1.78h2.05l3.96,5.91h-7.11l-3.69-5.52c-0.16-0.24-0.43-0.39-0.73-0.39
			H208.15z"/>
                            <polygon
                                //class="st1"
                                fill={PARTNER}
                                points="329.6,91.66 300.79,91.66 300.79,68.04 329.59,68.04 329.59,73.95 306.7,73.95 306.7,76.91 
			328.4,76.91 328.4,82.82 306.7,82.82 306.7,85.75 329.6,85.76 		"/>
                            <path
                                //class="st1"
                                fill={PARTNER}
                                d="M233.58,68.04c0,0,29.19,0.01,29.65,0.01v5.9H251.4l0,17.71h-6.07l0-17.71h-11.75V68.04z" />
                            <path
                                //class="st1"
                                fill={PARTNER}
                                d="M271.65,74.52v17.16h-5.91c0-0.46,0-23.15,0-23.62h7.01l17.16,17.17V68.04l5.91,0.02c0,0.46,0,23.15,0,23.62
			h-6.98L271.65,74.52z"/>
                            <path
                                //class="st1"
                                fill={PARTNER}
                                d="M339.24,79.86h17.07c0.36,0,0.62-0.27,0.62-0.61l0-4.68c0-0.34-0.26-0.61-0.59-0.61l-17.1,0V79.86z
			 M339.24,85.76v5.91h-5.91V68.05l23.58,0c2.52,0,4.01,1.52,4.29,1.79c0.41,0.43,1.79,1.79,1.79,4.32v5.49
			c0,2.53-1.25,3.9-1.66,4.33c-0.27,0.27-1.88,1.78-4.4,1.78h2.05l3.96,5.91h-7.12l-3.69-5.52c-0.16-0.24-0.43-0.39-0.73-0.39
			H339.24z"/>
                            <path
                                //class="st1"
                                fill={PARTNER}
                                d="M173.26,74.85v5l18.11,0v-5c0-0.49-0.38-0.89-0.91-0.89h-16.29C173.64,73.95,173.26,74.35,173.26,74.85z
			 M173.26,85.76l0,5.93h-5.91l0-17.53c0-2.53,1.38-3.89,1.78-4.32c0.27-0.27,1.77-1.79,4.29-1.79h17.76c2.52,0,4.01,1.52,4.29,1.79
			c0.41,0.43,1.78,1.79,1.78,4.32l0,17.53h-5.89l0-5.93H173.26z"/>
                            <path
                                //class="st1"
                                fill={PARTNER}
                                d="M139.67,79.86h17.07c0.36,0,0.62-0.27,0.62-0.61l0-4.68c0-0.34-0.26-0.61-0.59-0.61l-17.1,0V79.86z
			 M157.36,85.76h-17.69v5.91h-5.91V68.05l23.58,0c2.52,0,4.01,1.52,4.29,1.79c0.41,0.43,1.78,1.79,1.78,4.32l0,5.49
			c0,2.53-1.25,3.9-1.66,4.33C161.49,84.25,159.88,85.76,157.36,85.76z"/>
                            <path
                                //class="st1"
                                fill={PARTNER}
                                d="M118.15,83.52c0.82,0,1.49-0.67,1.49-1.49V70.73V69.5c0-0.82-0.67-1.49-1.49-1.49h-0.29H13.94h-0.29
			c-0.82,0-1.49,0.67-1.49,1.49v1.22v11.31c0,0.82,0.67,1.49,1.49,1.49H118.15z"/>
                        </g>
                    </g>
                </svg>
            </Box>
        </NextLink>

    );
}
