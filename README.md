React Native Practical Assignment: Reels/Shorts Video Player

Developed a vertical scrollable video feed similar to Instagram Reels or YouTube Shorts, where users can watch an HLS video stream with user details, description, likes, and comments.

**Features**

**_Core Features:_**

-> Full-screen vertical scrollable list of videos.

-> Gesture-based scrolling using react-native-gesture-handler.

-> HLS video playback using react-native-video.

-> Autoplay videos when visible, pause when scrolled away.

**_UI/UX:_**

-> Show user profile picture & username on the top-left.

-> Display video description with "Read More" option for long texts.

-> Show like count and comment count on the bottom-right.

-> Tap on video to play/pause.

**_Tech Stack_**

-> React Native for UI development.

-> react-native-video for HLS playback.

-> react-native-gesture-handler & react-native-reanimated for smooth gesture-based scrolling.

-> Context API for state management.

Note:
-> I have not used dynamic profile picture as sample array did not have the url which i could render it.

SAMPLE DATA:

[
{
"id": "1",
"videoUrl": "https://cdn.cohort.social/glimps/sample-video.m3u8",
"user": {
"username": "user1",
"profilePic": "PROFILE_PIC_URL"
},
"description": "Amazing view of the sunset! #nature",
"likes": "1.2K",
"comments": "234"
}
]
