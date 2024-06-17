<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-auto">
        <LayoutTaskbar />
        <div class="flex">
          <div class="w-3 h-3 m-1 bg-red100" />
          <div class="w-3 h-3 m-1 bg-red60" />
          <div class="w-3 h-3 m-1 bg-red40" />
        </div>
        <div class="flex">
          <div class="w-3 h-3 m-1 bg-orange100" />
          <div class="w-3 h-3 m-1 bg-orange60" />
          <div class="w-3 h-3 m-1 bg-orange40" />
        </div>
        <div class="flex">
          <div class="w-3 h-3 m-1 bg-yellow100" />
          <div class="w-3 h-3 m-1 bg-yellow60" />
          <div class="w-3 h-3 m-1 bg-yellow40" />
        </div>
        <div class="flex">
          <div class="w-3 h-3 m-1 bg-green100" />
          <div class="w-3 h-3 m-1 bg-green60" />
          <div class="w-3 h-3 m-1 bg-green40" />
        </div>
        <div class="flex">
          <div class="w-3 h-3 m-1 bg-blue100" />
          <div class="w-3 h-3 m-1 bg-blue60" />
          <div class="w-3 h-3 m-1 bg-blue40" />
        </div>
        <div class="flex">
          <div class="w-3 h-3 m-1 bg-purple100" />
          <div class="w-3 h-3 m-1 bg-purple60" />
          <div class="w-3 h-3 m-1 bg-purple40" />
        </div>
        <div class="flex">
          <div class="w-3 h-3 m-1 bg-pink100" />
          <div class="w-3 h-3 m-1 bg-pink60" />
          <div class="w-3 h-3 m-1 bg-pink40" />
        </div>
        <div class="flex">
          <div class="w-3 h-3 m-1 bg-darkblue100" />
          <div class="w-3 h-3 m-1 bg-darkblue60" />
          <div class="w-3 h-3 m-1 bg-darkblue40" />
        </div>
        <div class="flex">
          <div class="w-3 h-3 m-1 bg-black100" />
          <div class="w-3 h-3 m-1 bg-black90" />
          <div class="w-3 h-3 m-1 bg-black80" />
          <div class="w-3 h-3 m-1 bg-black70" />
          <div class="w-3 h-3 m-1 bg-black60" />
          <div class="w-3 h-3 m-1 bg-black50" />
          <div class="w-3 h-3 m-1 bg-black20" />
          <div class="w-3 h-3 m-1 bg-black10" />
        </div>
        <div class="flex bg-black10">
          <div class="w-3 h-3 m-1 bg-white100" />
          <div class="w-3 h-3 m-1 bg-white90" />
          <div class="w-3 h-3 m-1 bg-white80" />
          <div class="w-3 h-3 m-1 bg-white70" />
          <div class="w-3 h-3 m-1 bg-white60" />
          <div class="w-3 h-3 m-1 bg-white50" />
        </div>

        <div class="my-2">
          <UiTypography type="h1" size="heading1">
            Heading1
          </UiTypography>
          <UiTypography type="h2" size="heading2">
            Heading2
          </UiTypography>
          <UiTypography type="h3" size="heading3">
            Heading3
          </UiTypography>
          <UiTypography type="h4" size="heading4">
            Heading4
          </UiTypography>
          <UiTypography type="p">
            Paragraph default
          </UiTypography>
          <UiTypography type="p" size="paragraph-small">
            Paragraph small
          </UiTypography>
          <UiTypography type="p" size="paragraph-extra-small">
            Paragraph extra small
          </UiTypography>
          <UiTypography type="p" size="button-big">
            Button Big
          </UiTypography>
          <UiTypography type="p" size="button-regular">
            Button Regular
          </UiTypography>
        </div>
        <div class="w-[300px] my-2">
          <UiButton label="view project" primary regular arrow />
        </div>

        <div class="flex justify-around w-[900px]">
          <div class="w-[400px] my-2">
            <UiButton label="deliverables" primary big arrow />
          </div>
          <div class="w-[400px] my-2">
            <UiButton label="leeswijzer" secondary big />
          </div>
        </div>

        <div class="flex justify-center">
          <UiDeliverable
            lo4
            lo7
            to="/"
            deliverable-name="Projectplan"
            image-name="projectplan"
            deliverable-description="In dit document beschrijf ik mijn Personal Project Plan en geef ik een overzicht van het proces dat ik heb doorlopen bij het opstellen van dit plan."
            project-type="Personal Project"
          />

          <UiDeliverable
            lo1
            lo3
            to="/"
            deliverable-name="Library Research"
            image-name="libraryresearch"
            deliverable-description="In dit document beschrijf ik mijn Personal Project Plan en geef ik een overzicht van het proces dat ik heb doorlopen bij het opstellen van dit plan."
            project-type="Personal Project"
          />

          <UiDeliverable
            lo2
            lo3
            lo6
            to="/"
            deliverable-name="Wireframing"
            image-name="wireframing"
            deliverable-description="In dit document beschrijf ik mijn Personal Project Plan en geef ik een overzicht van het proces dat ik heb doorlopen bij het opstellen van dit plan."
            project-type="Personal Project"
          />
        </div>
      </div>

      <div class="flex flex-row">
        <div class="flex flex-col">
          <UiLearningOutcome lo-name-color="text-red100" lo-name="1. User Interaction (Analysis & Advice)" lo-description="You analyse the user, the user interaction and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design." />
          <UiLearningOutcome lo-name-color="text-yellow100" lo-name="3. Software design and realisation" lo-description="You create & design software with existing components or libraries using predetermined quality criteria and version control." />
          <UiLearningOutcome lo-name-color="text-blue100" lo-name="5. Investigative problem solving" lo-description="You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices." />
        </div>

        <div class="flex flex-col">
          <UiLearningOutcome lo-name-color="text-orange100" lo-name="2. User Interaction (Execution & Validation)" lo-description="You execute and evaluate the user experience of an interactive product. You document the development process for the stakeholders." />
          <UiLearningOutcome lo-name-color="text-green100" lo-name="4. Future-oriented organisation" lo-description="You carry out a problem analysis and on that basis, you determine the definitive problem and elaborate on this in a project plan." />
        </div>
      </div>

      <UiProject image-name="developmentwebsite" project-name="Individueel Project" project-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate tristique felis, non malesuada sapien fermentum id. Sed commodo diam in velit vestibulum, vel feugiat erat scelerisque. Suspendisse potenti. Aenean sit amet bibendum nunc. Sed auctor justo id mi eleifend, nec dictum metus convallis. In hac habitasse platea dictumst. Etiam ac risus ut urna rhoncus efficitur. " />
      <UiProject image-right image-name="libraryresearch" project-name="Groepsproject" project-description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate tristique felis, non malesuada sapien fermentum id. Sed commodo diam in velit vestibulum, vel feugiat erat scelerisque. Suspendisse potenti. Aenean sit amet bibendum nunc. Sed auctor justo id mi eleifend, nec dictum metus convallis. In hac habitasse platea dictumst. Etiam ac risus ut urna rhoncus efficitur. " />
    </UiContainer>
    <SectionsFooter />
  </div>
</template>
