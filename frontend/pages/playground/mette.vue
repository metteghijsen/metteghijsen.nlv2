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
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>
