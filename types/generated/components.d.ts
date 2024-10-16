import type { Schema, Attribute } from '@strapi/strapi';

export interface LandingWhyNeedSection extends Schema.Component {
  collectionName: 'components_landing_why_need_sections';
  info: {
    displayName: 'Why need section';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    list: Attribute.Component<'landing.text-list', true> & Attribute.Required;
    buttonText: Attribute.String & Attribute.Required;
  };
}

export interface LandingWaveList extends Schema.Component {
  collectionName: 'components_landing_wave_lists';
  info: {
    displayName: 'Wave list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    period: Attribute.String & Attribute.Required;
    time: Attribute.String & Attribute.Required;
    active: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface LandingTextWithDescription extends Schema.Component {
  collectionName: 'components_landing_text_with_descriptions';
  info: {
    displayName: 'Text with description';
    icon: 'bulletList';
  };
  attributes: {
    item: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface LandingTextList extends Schema.Component {
  collectionName: 'components_landing_text_lists';
  info: {
    displayName: 'Text list';
    description: '';
  };
  attributes: {
    item: Attribute.String & Attribute.Required;
  };
}

export interface LandingRegistrationSection extends Schema.Component {
  collectionName: 'components_landing_registration_sections';
  info: {
    displayName: 'Registration Section';
    icon: 'grid';
    description: '';
  };
  attributes: {
    cost: Attribute.String & Attribute.Required;
    costText: Attribute.Text & Attribute.Required;
    formTitle: Attribute.String & Attribute.Required;
    formText: Attribute.Text;
    nameField: Attribute.Component<'landing.field'>;
    emailField: Attribute.Component<'landing.field'>;
    telField: Attribute.Component<'landing.field'>;
    telegramField: Attribute.Component<'landing.field'>;
    formTextButton: Attribute.String & Attribute.Required;
    formSuccessfulMsg: Attribute.String & Attribute.Required;
  };
}

export interface LandingProgramSection extends Schema.Component {
  collectionName: 'components_landing_program_sections';
  info: {
    displayName: 'Program section';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    waves: Attribute.Component<'landing.wave-list', true>;
  };
}

export interface LandingPeopleList extends Schema.Component {
  collectionName: 'components_landing_people_lists';
  info: {
    displayName: 'People list';
    icon: 'bulletList';
  };
  attributes: {
    photo: Attribute.Media<'images'> & Attribute.Required;
    video: Attribute.Media<'videos'>;
    label: Attribute.String;
  };
}

export interface LandingLink extends Schema.Component {
  collectionName: 'components_landing_links';
  info: {
    displayName: 'Link';
    icon: 'exit';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    isExist: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    icon: Attribute.Enumeration<
      ['youtube', 'telegram', 'instagram', 'facebook', 'vk', 'email']
    >;
  };
}

export interface LandingHero extends Schema.Component {
  collectionName: 'components_landing_heroes';
  info: {
    displayName: 'Hero section';
    description: '';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    list: Attribute.Component<'landing.hero-list', true> & Attribute.Required;
    buttonText: Attribute.String & Attribute.Required;
  };
}

export interface LandingHeroList extends Schema.Component {
  collectionName: 'components_test_category_hero_lists';
  info: {
    displayName: 'border list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    icon: Attribute.Enumeration<['speedometer', 'clock', 'globe', 'users']> &
      Attribute.Required;
    colorText: Attribute.String;
  };
}

export interface LandingFooterSection extends Schema.Component {
  collectionName: 'components_landing_footer_sections';
  info: {
    displayName: 'Footer section';
    icon: 'grid';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    copyrightDate: Attribute.String & Attribute.Required;
    socialLinks: Attribute.Component<'landing.link', true>;
    contactLinks: Attribute.Component<'landing.link', true>;
    textLinks: Attribute.Component<'landing.link', true>;
  };
}

export interface LandingField extends Schema.Component {
  collectionName: 'components_landing_fields';
  info: {
    displayName: 'field';
    icon: 'feather';
    description: '';
  };
  attributes: {
    placeholder: Attribute.String;
    type: Attribute.Enumeration<['text', 'email', 'tel']> & Attribute.Required;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<false>;
    isExist: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface LandingFeedbackSection extends Schema.Component {
  collectionName: 'components_landing_feedback_sections';
  info: {
    displayName: 'Feedback section';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    people: Attribute.Component<'landing.people-list', true> &
      Attribute.Required;
  };
}

export interface LandingDropdown extends Schema.Component {
  collectionName: 'components_landing_dropdowns';
  info: {
    displayName: 'Program list section';
    icon: 'grid';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    list: Attribute.Component<'landing.text-with-description', true>;
  };
}

export interface LandingCuratorsSection extends Schema.Component {
  collectionName: 'components_landing_curators_sections';
  info: {
    displayName: 'Curators section';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    people: Attribute.Component<'landing.people-list', true> &
      Attribute.Required;
  };
}

export interface LandingCourseDescriptionSection extends Schema.Component {
  collectionName: 'components_landing_course_description_sections';
  info: {
    displayName: 'Course description section';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    highlightedText: Attribute.Text;
    posterVideo: Attribute.Media<'images'> & Attribute.Required;
    video: Attribute.Media<'videos'> & Attribute.Required;
  };
}

export interface LandingAboutCourseSection extends Schema.Component {
  collectionName: 'components_landing_about_course_sections';
  info: {
    displayName: 'About course Section';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    list: Attribute.Component<'landing.text-list', true> & Attribute.Required;
  };
}

export interface LandingAboutAuthorSection extends Schema.Component {
  collectionName: 'components_landing_about_author_sections';
  info: {
    displayName: 'About author section';
    description: '';
    icon: 'grid';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    quote: Attribute.String;
    authorQuote: Attribute.String;
    list: Attribute.Component<'landing.text-list', true> & Attribute.Required;
    photo: Attribute.Media<'images'> & Attribute.Required;
    socialLinks: Attribute.Component<'landing.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'landing.why-need-section': LandingWhyNeedSection;
      'landing.wave-list': LandingWaveList;
      'landing.text-with-description': LandingTextWithDescription;
      'landing.text-list': LandingTextList;
      'landing.registration-section': LandingRegistrationSection;
      'landing.program-section': LandingProgramSection;
      'landing.people-list': LandingPeopleList;
      'landing.link': LandingLink;
      'landing.hero': LandingHero;
      'landing.hero-list': LandingHeroList;
      'landing.footer-section': LandingFooterSection;
      'landing.field': LandingField;
      'landing.feedback-section': LandingFeedbackSection;
      'landing.dropdown': LandingDropdown;
      'landing.curators-section': LandingCuratorsSection;
      'landing.course-description-section': LandingCourseDescriptionSection;
      'landing.about-course-section': LandingAboutCourseSection;
      'landing.about-author-section': LandingAboutAuthorSection;
    }
  }
}
