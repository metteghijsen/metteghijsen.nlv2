<template>
  <div>
    <div
      :class="[darkModeClass, 'gradient-background-light']"
      class="select-none"
    >
      <UiProjectHeader header-text="Printpal" description-text="The app to support people with depression." />
      <UiTextbox
        id="firstarticle"
        title-text="A way to talk about your feelings"
      >
        Printpal is an application that supports people with depression by sending positive messages to a pocket printer. Within the app you get the ability to send prints to your friends and random people. You can also choose what kind of prints you want to receive at what time. If you are not near your printer, for example because you are traveling and did not bring it with you, the app offers you the possibility to view these prints anywhere, anytime! You can also chat with the people who have chosen to receive a response to their prints. This way you can talk together about sensitive topics, and get a glimpse into the mind of someone who is experiencing the same thing as you. By doing so, we hope to encourage people to start the conversation, and make new friends.
        <br><br>
        I made this app together with my project group in the second year of my study ICT & Media Design (2022). We participated in the ProjectB competition of the company Sogeti. The assignment of the competition was: Create an IT innovation for people with a (mental) disorder or chronic illness. I pitched this idea together with a fellow group member in front of 120 people. Unfortunately, we did not win anything.
      </UiTextbox>
      <NuxtImg v-motion-slide-visible-once-bottom src="/img/projectimage3.png" class="w-full" />

      <UiTextbox
        title-text="branding colors & typography"
      >
        Because we work with quite a vulnerable target group, we want to make sure that people don't
        gain anything negative from our app. We tried to apply this in our design. For example, we
        paid attention to our color and font usage.
        <br><br>
        We ended up going with the colors green and blue. Our color research showed that green
        stands for harmony, security and growth. This should radiate balance and peace.
        Blue stands for security and trust. This should convey a sense of protection and
        tranquility. For these reasons we went for these colors.
        <br><br>
        In addition, when designing the UI, we researched some design principles that we would like
        to follow. Some examples of design principles that appear in our design are: "Less is More",
        "Simple Language", "Hand Position Controls" and "Make Interface Elements Clearly Visible".
      </UiTextbox>
      <NuxtImg v-motion-slide-visible-once-bottom src="/img/projectimage2.png" class="w-full min-h-[500px] object-contain lg:py-14 py-3 px-4 xl:px-[350px]" />
      <UiTextbox
        title-text="usertesting checking in with users"
      >
        Before we landed on the UI we have now, we also had several rounds of testing with users who
        fall within our target audience. For this we used the platform Maze. We set up a number of
        scenarios beforehand which the users had to walk through. For example, "Create an account",
        "Add a friend" or "Change your password". This way we could see if the UI looked logical to
        users. From Maze, we always received heatmaps of where users clicked the most, and
        percentages of how many users followed our selected path, and how many deviated. The
        combination of all this data and the feedback we received gave us an overview of the best
        way to position our elements so that it made sense to the users.
        <br>
        <br>
        <b> Preferences & Settings </b>
        <br>
        Overall, we received very positive feedback on the user experience. Because we stayed as
        close as possible to the human interface guidelines of Apple and Google, our testers knew
        their way around the prototype with ease. Yet for some, the difference between settings and
        the preferences was unclear. Therefore we decided to make the preferences a tab within the
        settings. This way it was much clearer for the users.
        <NuxtImg v-motion-slide-visible-once-bottom src="/img/projectimage1.png" class="w-full pt-4" />
      </UiTextbox>
      <UiTextbox
        title-text="building the prototype"
      >
        After we tested our user interface, it was time to start building it after the initial
        design. Our plan was to do this through a PWA (Progressive Web App). This is an application
        that you can install through your browser on both your smartphone and desktop. The great
        benefit of this is that you can use the app anywhere.

        <br><br>

        Because we worked with a PWA, we were able to create the app using HTML, CSS and JavaScript.
        Since we would be having users in our app, we had very large amounts of data. This data had
        to be stored somewhere. For this we used Firebase. A database tool from Google. My part of
        the build process was to create the backend. So I created working login and registration
        page using Firebase.
      </UiTextbox>
      <NuxtImg src="/img/projectimage4.png" class="w-full" />
      <UiContainer>
        <LayoutNavbar />
      </UiContainer>
      <SectionsFooter />
    </div>
  </div>
</template>
