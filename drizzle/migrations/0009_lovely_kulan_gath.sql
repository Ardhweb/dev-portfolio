CREATE TABLE `section_visibility` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`section_name` text NOT NULL,
	`is_active` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
ALTER TABLE `seo_dat` RENAME TO `seo_data`;