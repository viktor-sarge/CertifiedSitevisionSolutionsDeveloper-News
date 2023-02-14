# CertifiedSitevisionSolutionsDeveloper-News

## What's this?

This displays news blurbs and allows the user to configure which archive to pick news from and how many to maximally display.

The information displayed is image, headline, ingress (max 100char) and excerpt (max 300 char).

This is code developed as a part of a certification called "Certified Sitevision Solution Developer".

## Requirements

To use this code you need a working Sitevision install. Your user account may need elevated privileges.

## Installation

-   Add a script module where you want the component
-   Set up a mandatory variable called "source" of the type "Node". Select a news archive on the site. (This value source is needed by the serverside javascript)
-   Add a mandatory variable called "limit" of the type "Integer". This is also needed by the serverside javascript.
-   Upload the .js file from this repo to the tab "Javascript" and the .vm to the tab "Velocity".
-   Save and your news should now display

## Usage

Feel free to make use of this code, but do not assume it adheres to best practices. This is written as part of training and likely have flaws.
