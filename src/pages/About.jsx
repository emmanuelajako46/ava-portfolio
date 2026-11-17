import React from 'react';

// sections 
import Intro from '../components/About/Intro';
import WorkExperience from '../components/About/WorkExperience';
import Stack from '../components/About/Stacks';
import Cta from   '../components/CtaFooter';
export default function About() {
  return (
  <>
    <Intro />
    <WorkExperience />
    <Stack />
    <Cta />
  </>
  );
}

