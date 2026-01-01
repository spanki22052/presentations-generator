export type Tone = 'professional' | 'friendly' | 'persuasive' | 'academic' | 'creative';

export type ContentDepth = 'brief' | 'standard' | 'detailed';

export interface AIPreferencesFormValues {
  tone: Tone;
  creativityLevel: number;
  contentDepth: ContentDepth;
  defaultLanguage: string;
  autoImageSelection: boolean;
}

export interface AIPreferencesState {
  preferences: AIPreferencesFormValues;
  isLoading: boolean;
}

