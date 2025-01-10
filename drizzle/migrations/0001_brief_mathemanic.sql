CREATE TABLE `media` (
	`id` text,
	`type` text NOT NULL,
	`url` text NOT NULL,
	`related_project` integer,
	FOREIGN KEY (`related_project`) REFERENCES `project`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `primarycategories` (
	`id` text PRIMARY KEY NOT NULL,
	`categoryname` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `project` (
	`id` text PRIMARY KEY NOT NULL,
	`projectname` text NOT NULL,
	`description` text,
	`usedlanguage` text,
	`start_at` text,
	`end_at` text,
	`status` text,
	`live_url` text,
	`primarycategory` integer NOT NULL,
	`secondarycategory` integer NOT NULL,
	`type` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `project_types` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `secondcategories` (
	`id` text PRIMARY KEY NOT NULL,
	`categoryname` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `skillset` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`expertise` text NOT NULL,
	`stars` integer,
	`year_experiance` integer
);
