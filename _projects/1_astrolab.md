---
layout: page
title: "AstroLab: GW-CEP Photometry"
description: A Comprehensive Photometric Model of the W-Type Contact Binary GW-CEP.
img: assets/img/binaries_sora.png
importance: 1
category: academic
related_publications: true
---
_thumbnail image credit: Sora "Generate me an image of a W-Type Contact Binary"_

## Lay Summary

This project formed my __3rd year Advanced Laboratory__ (Astrolab) project (equivalent to a Bachelor's Dissertation), and was carried out with lab partner Tom Boss. My final paper was ~10k words and scored an 82%, additionally __winning me the Florence Nightingale Award__. I describe my work in the following lay summary, which should be comprehensible to any background. If you are an astronomer, read on for the project details!

_Did you know many of the stars you see in the night sky are not alone? This paper focuses on one fascinating pair
in the constellation Cepheus. These stars are so close together that they’re actually touching, with the larger star slowly
transferring some of its material to the smaller one. Because as they orbit each other they pass in front of each other, they
create eclipses, just like when the Moon passes in front of the Sun. This makes the light we see from them flicker and
change over time._

_By studying this flickering and comparing it to stars that shine steadily, we can use computer models to figure out what
these two stars look like, their temperature and even how far away they are. Then, using nearly 30 years of data from
other scientists, we find that the stars’ orbit is speeding up: it’s the same principle as when a figure skater spins faster by
pulling their arms in. Even more surprisingly, we find that there’s a hidden third object in the orbit only a fraction the
mass of the earth, passing the system every 30 years, and ever so slightly changing how fast the two stars spin._



## Project Details

__Supervisors:__ Prof Alastair Edge & Prof Mark Swinbank

__Key Skills:__ time domain astronomy - roche lobe simulations - CCD astronomy - PHOEBE/N<span style="font-variant:small-caps;">IGHTFALL</span>

<div class="row justify-content-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/figure1.jpg" title="ephemerides" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Observation field centred upon GW-Cep with reference stars highlighted and photometry aperatures/annuli highlighted. Pixels rotated for N-E orthogonal to coordinate axis. Data collected on 2024-10-17 at 19:24 on DRACO2, at seeing of 2.8 ′′.</div>

This project presents a new investigation into the photometric behaviour of the W-Type Eclipsing binary star system, GW-Cephei. Based on 21 nights of observations from Durham, UK, between October and December 2024 using 14-30" telescopes, we collect and analyse 10 light curves in B, V, and r bands to model the system's characteristics. GW-Cep is an archetypical high-age W-Type contact binary, with early CCD and PV observations from the early 2000s suggesting both a third body and an O'Connell Effect from the system's photometry; these investigations are therefore motivated by improving the understanding of close-binary behaviour and testing quantitative measures of light curve asymmetry. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/figure3.jpg" title="ephemerides" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/figure5.jpg" title="ephemerides" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/figure9.jpg" title="ephemerides" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Left: example differential aperture photometry for a single night of obsevations in V with comparative PSF for GW CEP and nearby calibration TYC stars. Middle: Phase dispersion minimised light curves for measurements across all filters with colour metrics. Right: Analysis of light curve asymmetry using square McCartney light curve asymmetry (top pane) and Fourier analysis including Wilsey harmonic (middle and bottom panes).
</div>

Our analysis of the system's colour variability allow us to determine a lower limit on its temperature, leading to estimates of its absolute magnitude and distance from Earth. We then utilise a synthetic Roche lobe model, refined with simulated annealing, to construct a posterior around our observed data and therefore determine the system's intrinsic properties, such as its inclination and mass ratio.

We determine presence of prominent O’Connell Effect (Light curve asymmetry). Our simulation-based modelling suggests this is best explained by an asymmetric configuration of cool, high-latitude spots on the secondary star, and we apply novel asymmetry analysis methods to evaluate the effect's magnitude and corroborrate starspot lattitudes suggested by simulations.

Finally, by combining our data with over twenty-five years of published eclipse timings, we propose a new model for the system’s long-term photometry. This model suggests a gradual increase in the orbital period, alongside a periodic instability every 10.9 years. By solving the light transfer time equation and constructing an MCMC posterior, we theorise this instability is caused by a third, unseen body orbiting the binary system, with a refined period from the system's most recent study. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/epall.jpg" title="ephemerides" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
Ephemerides for eclipse timing analysis in GW-Cep. A) Full Bob Nelson+Astrolab dataset, plotted to illustrate the large random error in pre-CCD data. B) CCD-only, fit to linear and quadratic (labelled) ephemerides, with normalised residuals and distributions plotted; note the significant 4000 day periodicity, and the large standard error on both model’s residuals. C) Top pane plots MCMC- determined LTT model (blue), with its 2$\sigma$covariance error envelope (teal) over quadratically-corrected CCD data (orange) with normalised residuals to indicate fit strength: note the elimination of substructure in residuals. Note also the artificial maximum in the blue residuals created by low-precision photometry measurements.
</div>

It should be noted that while we propose a new model based on our CCD data, conclusions regarding the star spots and the third body would be strengthened by future spectroscopic data, and we are limited by the photometric methods of this investigation.
