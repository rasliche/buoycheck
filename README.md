# buoycheck

BuoyCheck is a citizen science reporting initiative for the Florida Keys National Marine Sanctuary.

## Todo:

- MVP
- Confidence Algorithm
- Compass integration
- Offline usage
- Long term data visualization
- Database design

## Stage 1 / MVP

The MVP will allow the user to submit the presence/absence report for a since Marine Protected Area with SPA buoys.

The user will get feedback telling them their report was submitted and thank them.

An admin page (no authorization) will collate reports and display data. Initial work on a confidence algorithm will take place.

## Confidence Algorithm

FKNMS management and buoy teams need to make smart decisions when it comes to using resources to maintain and install buoys. These are never simple logistics, so providing a confidence score to the presence of a buoy is important for preventing wasted efforts.

A Confidence Algorithm should take into account things like:

- How long ago was the most recent report?
- How accurate have the submitters of the reports been in the past?
- How close was a report to where the buoy should have been?
- Were they facing the location of the buoy if they weren't within a certain distance of it?
