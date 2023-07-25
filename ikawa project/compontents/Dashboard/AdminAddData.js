import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AddNewArticle from './Forms/AddNewArticle';
import AddNewEvent from './Forms/AddNewEvent';
import AddNewProduct from './Forms/AddNewProduct';
import AddNewReport from './Forms/AddNewReport';
import AddNewCoffeeRoaster from './Forms/AddNewCoffeeRoaster';
import AddNewCoffeeExporter from './Forms/AddNewCoffeeExporter';
import AddNewCoffeeShop from './Forms/AddNewCoffeeShop';
import AddNewAnnouncement from './Forms/AddNewAnnouncement';
import { updateEvent, fetchEvent } from './services/EventsDataService';
import {fetchArticle} from './services/ArticlesDataService';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function AdminAddData() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [eventData, setEventData] = useState(null);
  const [articleData, setArticleData] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const eventId = urlParams.get('eventId');

        if (eventId && /^[0-9a-fA-F]{24}$/.test(eventId)) {

          const eventData = await fetchEvent(eventId);

          setEventData(eventData);
          setExpanded('panel2');
          
        } else {
          setEventData(null);
          setExpanded(false);
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    const fetchArticleData = async () => {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const articleId = urlParams.get('articleId');

        if (articleId && /^[0-9a-fA-F]{24}$/.test(articleId)) {
          const articleData = await fetchArticle(articleId);
          setArticleData(articleData);
          setExpanded('panel1'); 
        } else {
          setArticleData(null);
          setExpanded(false);
        }
      } catch (error) {
        console.error('Error fetching article data:', error);
      }
    };

    fetchArticleData();
    fetchEventData();
  }, []);


  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    const formattedDate = dateObject.toISOString().split('T')[0];
    return formattedDate;
  };

  return (
    <div className={`${classes.root} pt--30`}>

      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography className={classes.heading}>New article</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {articleData ? (
            <AddNewArticle articleData={articleData} />
          ) : (
            <AddNewArticle />
          )}
        </AccordionDetails>
      </Accordion>    

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'>
          <Typography className={classes.heading}>New event</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {eventData ? (
            <AddNewEvent eventData={eventData} />
          ) : (
            <AddNewEvent />
          )}
        </AccordionDetails>
      </Accordion>


      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'>
          <Typography className={classes.heading}>New product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddNewProduct />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel4bh-content'
          id='panel4bh-header'>
          <Typography className={classes.heading}>New report</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddNewReport />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel5bh-content'
          id='panel5bh-header'>
          <Typography className={classes.heading}>
            New coffee roaster
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddNewCoffeeRoaster />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel6'}
        onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel6bh-content'
          id='panel6bh-header'>
          <Typography className={classes.heading}>
            New coffee exporter
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddNewCoffeeExporter />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel7'}
        onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel7bh-content'
          id='panel7bh-header'>
          <Typography className={classes.heading}>New coffeeshop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddNewCoffeeShop />
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel8'}
        onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel8bh-content'
          id='panel8bh-header'>
          <Typography className={classes.heading}>New announcement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AddNewAnnouncement />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
