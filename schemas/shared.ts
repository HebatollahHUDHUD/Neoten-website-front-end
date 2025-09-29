import { z } from "zod";

export const timestamp = z.string().datetime(); // ISO 8601 timestamp

export const linkSchema = z
  .string()
  .min(1)
  .regex(/^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/\S*)?$/, {
    message: "Website URL is invalid",
  });

export const PaginationSchema = z.object({
  total: z.number(),
  count: z.number(),
  per_page: z.number(),
  current_page: z.number(),
  total_pages: z.number(),
});

export const ItemSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const CitySchema = z.object({
  id: z.number(),
  name: z.string(),
  country: ItemSchema,
});

export const StateSchema = z.object({
  id: z.number(),
  name: z.string(),
  city: CitySchema,
});

// --------------------

export const ReviewSchema = z
  .object({
    id: z.number().int().positive(),
    name: z.string().min(1),
    role: z.string().min(1),
    location: z.string().min(1),
    rating: z.number().int().min(1).max(5),
    review: z.string().min(1),
  })
  .strict();

const infoSchema = z.object({
  website_name: z.string().min(1),
  website_desc: z.string().min(1),
  website_logo: z.string().min(1),
  website_logo_ar: z.string().min(1),
  footer_logo: z.string().min(1),
  footer_logo_ar: z.string().min(1),
  website_favicon: z.string().min(1),
  footer_content: z.string().min(1),
  social_media_facebook_url: z.string().min(1),
  social_media_instagram_url: z.string().min(1),
  social_media_x_url: z.string().min(1),
  social_media_linkedin_url: z.string().min(1),
  mobile: z.string().min(1),
  email: z.string().min(1),
  address: z.string().min(1),
  map_url: z.string().url(),
  payment_info_iban: z.string(),
  payment_info_swift_code: z.string(),
  payment_info_cliq_username: z.string(),
  payment_info_account_name: z.string(),
  payment_info_account_number: z.string(),
});

const homeSilds = z.array(
  z.object({
    id: z.number(),
    image: z.string(),
    title: z.string(),
    subtitle: z.string(),
    sort_num: z.number(),
  })
);

const serviceSchema = z.object({
  id: z.number(),
  image: z.string(),
  banner: z.string(),
  title: z.string(),
  content: z.string(),
  sort_num: z.number(),
});

const servicesSchema = z.array(serviceSchema);

const homeSchema = z.object({
  home_page_services_subtitle: z.string(),
  home_page_services_title: z.string(),
  reviews_subtitle: z.string(),
  reviews_title: z.string(),

  stats_background: z.string(),

  stats_items: z.array(
    z.object({ icon: z.string(), title: z.string(), subtitle: z.string() })
  ),
  stats_2_items: z.array(z.object({ value: z.string(), title: z.string() })),

  why_us_background: z.string(),
  why_us_image: z.string(),

  why_us_items: z.array(
    z.object({
      title: z.string(),
      desc: z.string(),
    })
  ),

  why_us_subtitle: z.string(),
  why_us_title: z.string(),
  slides: homeSilds,
  services: servicesSchema,
  reviews: z.array(ReviewSchema),
});

const userSchema = z.object({
  id: z.number(),
  user_type: z.string(),
  name: z.string(),
  email: z.string(),
  email_verified_at: null,
  phone: z.string(),
  nationality: z.string(),
  photo: z.string(),
  passport: z.string(),
  last_login_at: null,
  status: z.string(),
  is_active: z.number(),
  created_at: z.string(),
  updated_at: z.string(),
});

export type Home = z.infer<typeof homeSchema>;
export type Info = z.infer<typeof infoSchema>;
export type User = z.infer<typeof userSchema>;
