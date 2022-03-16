export interface PersonalDetails {
  personID: string;
  full_name: string;
  date_of_birth: string;
  title_refcode: string;
  Addresses: [
    {
      address_contact_type_refcode: string;
      address_line_1: string;
      address_line_2: string;
      address_line_3: string;
      address_line_4: string;
      address_line_5: string;
      postal_code: string;
      post_box: string;
      district: string;
      city: string;
      area: string;
      region: string;
      locality: string;
      country_2l: string;
      latitude: string;
      longitude: string;
      last_updated_date: string;
    }
  ];
  contacts: [
    {
      description: string;
      value: string;
    }
  ];
  Emails: [
    {
      MainEmail: {
        email_address: string;
      };
    }
  ];
  notes: [
    {
      title: string;
      description: string;
      createdAt: string;
      targetType: string;
      author: {
        fullname: string;
      };
    }
  ];
}

export interface VonageEvent {
  phone_number: string;
  service_name: string;
  call_direction: string;
  start_time: string;
  duration: string;
}

export interface Note {
  title: string;
  description: string;
  createdAt: string;
  targetType: string;
  author: {
    fullname: string;
  };
  notes?: Array<Note>;
}
