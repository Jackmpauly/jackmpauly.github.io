# Measuring Listening Data

### Sept 15, 2022

Every December 1st, music and statistics nerds like me get to celebrate Christmas a little bit early with Spotify's annual *Spotify Wrapped*. *Wrapped* is an aesthetically pleasing and highly sharable summary of your music listening habits and statistics gathered throughout the past year. It's always a fun time seeing other people's rankings, comparing them to your own, and looking back your year in music. But as I've broadened my music catalogue and started to pay closer attention to my statistics, I realized that *Wrapped* and Spotify's profile don't necessarily do my listening summary justice.

#### Spotify's Listening API

Spotify tracks your listening *history*; once you've *listened* to a track, that Spotify track and its data gets added to your list of plays and added to your Spotify "permanent record". Song data contains surface level attributes like artist(s), genre, and album, as well as more hidden attributes such as tempo, loudness, valence, energy, "dancability", etc that Spotify uses to make playlists and curate tastes. Spotify also makes their [API](https://developer.spotify.com/documentation/) public and completely free to use, allowing developers to create apps that can analyze a user's song data.

You would think that with all this careful data tracking, a user could get a very detailed picture of their listening statistics, but you'd be wrong. Spotify's numbers, or at least the ones they curate to their users, are pretty shallow, only showing Top 5 artists, songs, and genres.

Okay, but what about Spotify's API? Can't third-party developers make apps using the API to show users a better visualization of their listening data? Again however, by fault or by design, Spotify limits the kind of statistics you can extract from a user's listening history. **All** apps that use the Spotify API to display statistics are limited to top tracks, artists, and (strange) genres measured over the last 30 days, 6 months, and all-time plus the user's 50 most recently played tracks. This is incredibly restrictive and leaves no room for creativity using the statistics. Any app that lets users sign in to their Spotify will inevitable just spit out the same metrics.

With *Wrapped* this restriction makes some sense in an attempt to streamline the statistics and create consise summary. After all, it wouldn't be fun to look at, much less share, if the statistics were cluttered and wordy. It does its job of creating a buzz around the music listening community and the various apps using Spotify's API are fun gimmicks, but to get more detailed and interesting data, you have to dig deeper.

#### Last.fm

[*Last.fm*](https://www.last.fm/home), formally Scrobble.fm, is a service that makes huge improvements on the listening statistics world. It works by use of the *Scrobbler*, a tool developed by Last.fm that interfaces with your music player and *observes* your listening activity in real-time, without the use of a streaming service's API. **Unlike Spotify, Last.fm doesn't look at what *happened*, it looks at *what's happening*.**

While statistics from [apps that use Spotify's API](https://www.statsforspotify.com/) are bound by their streaming service, Last.fm builds its own independent, more accurate data set. This comes with the drawback of your listening history only starting once you set up your account and link it with your preferred streaming service.

The *Scrobbler's* independence from any streaming platform's API means you can attach most streaming services (Spotify, Apple Music, Tidal, YouTube, Soundcloud, Pandora, Bandcamp, etc.) to Last.fm and concurrently track listening data from a multitude of different sources.

It doesn't end there. The *Scrobbler* is a versitile and portable plugin that comes with its own API for developers build/attach to music players and let Last.fm users scrobble on their app. This is hugely important to me, as this year I've really gotten into collecting and listening to *lossless* audio. My primary music player, [*Clementine*](https://www.clementine-player.org/), has a *Scrobbler* plugin, meaning any music I listen to using that player will be counted towards my scrobbles.

The data each song has is still pretty standard (album, artist, song name, genre, etc), but where Last.fm shines is how much *control* the user has over their data. If you like an artist, you can see your most listened to songs by them. You can compare which albums you've listened to more than others. You can see which songs on an album you listen to most.

On top of that, your scrobbles are also timestamped, giving your data more meaning through the vector of time. It doesn't sound like a lot, but here are some examples of how that can be used:
* "I've listened to *All That* by Carly Rae Jepsen a total of 58 times, but 20 of those scrobbles came in March 2021."
* "What was my most listened to song while I was on vacation during these two weeks?"
* "What genre of music do I tend to listen to after 9pm?"

If it isn't clear already, I absolutely love music and I probably think about it more than I should. I'm glad Last.fm's allows me to fine tune my listening statistics and scratch that itch.