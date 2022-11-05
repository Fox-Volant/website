import * as React from "react";

export const Head = ({ location, params, data, pageContext }) => (
    <>
        {/* <!-- Primary Meta Tags --> */}
        <title>Fox Volant | UAV Solutions</title>
        <meta name="title" content="Fox Volant | UAV Solutions" />
        <meta
            name="description"
            content="Fox Volant are a team of UAV (Unmanned Aerial Vehicles, i.e; Drones) and photogrammetry specialists, based in East Anglia in the UK. We can capture and composite extensive, accurate photographic imagery of your subjects and render it in any of a number of formats. We specialise in 2D photo-mosaics and 3D 'digital twins'. These are useful in a variety of industries eg. agriculture, archeology, or construction. Please contact us to find out how we can help you."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.foxvolant.com/" />
        <meta property="og:title" content="Fox Volant | UAV Solutions" />
        <meta
            property="og:description"
            content="Fox Volant are a team of UAV (Unmanned Aerial Vehicles, i.e; Drones) and photogrammetry specialists, based in East Anglia in the UK. We can capture and composite extensive, accurate photographic imagery of your subjects and render it in any of a number of formats. We specialise in 2D photo-mosaics and 3D 'digital twins'. These are useful in a variety of industries eg. agriculture, archeology, or construction. Please contact us to find out how we can help you."
        />
        <meta property="og:image" content="" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.foxvolant.com/" />
        <meta property="twitter:title" content="Fox Volant | UAV Solutions" />
        <meta
            property="twitter:description"
            content="Fox Volant are a team of UAV (Unmanned Aerial Vehicles, i.e; Drones) and photogrammetry specialists, based in East Anglia in the UK. We can capture and composite extensive, accurate photographic imagery of your subjects and render it in any of a number of formats. We specialise in 2D photo-mosaics and 3D 'digital twins'. These are useful in a variety of industries eg. agriculture, archeology, or construction. Please contact us to find out how we can help you."
        />
        <meta property="twitter:image" content="" />
    </>
);
