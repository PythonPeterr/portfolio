"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  priority = false,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  // Optimize images array to use correct format
  const optimizedImages = images.map(img => {
    // Convert .png to .webp if webp version exists (for optimized projects)
    // For giroscope, use cover.webp if it exists, otherwise keep original
    if (img.includes('giroscope') && img.endsWith('.png')) {
      // Check if cover.webp exists by trying the replacement
      return img.replace('giroscope.png', 'cover.webp').replace('.png', '.webp');
    }
    if ((img.includes('meijer-knijnenberg') || img.includes('n8n-crm-automation')) && img.endsWith('.png')) {
      return img.replace('.png', '.webp');
    }
    return img;
  });

  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        items={optimizedImages.map((image, index) => ({
          slide: image,
          alt: title,
          priority: priority && index === 0, // Only prioritize first image of priority card
        }))}
      />
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
