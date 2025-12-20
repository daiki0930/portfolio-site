import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Card,
  CardBody,
  Tag,
  TagLeftIcon,
  TagLabel,
  Link,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaEnvelope,
  FaGraduationCap,
  FaCode,
  FaServer,
  FaCloud,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaPython,
  FaGitAlt,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiNextdotjs } from "react-icons/si";

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box minH="100vh">
      {/* Navbar */}
      <Box
        as="nav"
        position="sticky"
        top={0}
        zIndex={1000}
        bg={
          colorMode === "dark"
            ? "rgba(3, 7, 18, 0.8)"
            : "rgba(255, 255, 255, 0.8)"
        }
        backdropFilter="blur(10px)"
        borderBottom="1px"
        borderColor={colorMode === "dark" ? "gray.800" : "gray.200"}
      >
        <Container maxW="container.lg">
          <Flex h="70px" align="center" justify="space-between">
            <Heading size="lg" color="brand.500">
              Daiki.Kuroiwa
            </Heading>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              <Link
                onClick={() => scrollToSection("about")}
                cursor="pointer"
                _hover={{ color: "brand.500" }}
              >
                About
              </Link>
              <Link
                onClick={() => scrollToSection("skills")}
                cursor="pointer"
                _hover={{ color: "brand.500" }}
              >
                Skills
              </Link>
              <Link
                onClick={() => scrollToSection("projects")}
                cursor="pointer"
                _hover={{ color: "brand.500" }}
              >
                Projects
              </Link>
              <Link
                onClick={() => scrollToSection("contact")}
                cursor="pointer"
                _hover={{ color: "brand.500" }}
              >
                Contact
              </Link>
            </HStack>
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
              onClick={toggleColorMode}
              variant="ghost"
            />
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box pt={32} pb={20} px={6}>
        <Container maxW="container.lg">
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={12}
          >
            <Box flexShrink={0}>
              <Flex
                w={{ base: 32, md: 40 }}
                h={{ base: 32, md: 40 }}
                borderRadius="full"
                bgGradient="linear(to-br, brand.500, brand.700)"
                align="center"
                justify="center"
                color="white"
                fontSize={{ base: "5xl", md: "6xl" }}
                fontWeight="bold"
              >
                D.K
              </Flex>
            </Box>
            <VStack
              flex={1}
              align={{ base: "center", md: "flex-start" }}
              spacing={6}
            >
              <Heading size="2xl" textAlign={{ base: "center", md: "left" }}>
                Daiki.Kuroiwa
              </Heading>
              <Heading
                size="lg"
                color="gray.500"
                fontWeight="normal"
                textAlign={{ base: "center", md: "left" }}
              >
                Student Engineer
              </Heading>
              <Text
                fontSize="lg"
                textAlign={{ base: "center", md: "left" }}
                lineHeight="tall"
              >
                立正大学でデータサイエンスを学びながら、エンジニアとして社会をより良くすることを目指す学生です。
              </Text>
              <HStack
                spacing={4}
                flexWrap="wrap"
                justify={{ base: "center", md: "flex-start" }}
              >
                <Button
                  as={Link}
                  href="https://github.com/daiki0930"
                  target="_blank"
                  colorScheme="brand"
                  size="lg"
                  leftIcon={<FaGithub />}
                  _hover={{ textDecoration: "none" }}
                >
                  GitHub
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  colorScheme="brand"
                  size="lg"
                  leftIcon={<FaEnvelope />}
                >
                  Contact
                </Button>
              </HStack>
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        py={20}
        px={6}
        bg={colorMode === "dark" ? "gray.900" : "gray.50"}
      >
        <Container maxW="container.lg">
          <Heading size="xl" mb={12}>
            About Me
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Card>
              <CardBody>
                <HStack align="flex-start" spacing={4}>
                  <Box color="brand.500" fontSize="3xl" mt={1}>
                    <FaGraduationCap />
                  </Box>
                  <VStack align="flex-start" spacing={3}>
                    <Heading size="md">学生エンジニア</Heading>
                    <Text color="gray.600" lineHeight="tall">
                      インターンシップや個人プロジェクトを通じて、実践的なスキルを磨いています。
                    </Text>
                  </VStack>
                </HStack>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <HStack align="flex-start" spacing={4}>
                  <Box color="brand.500" fontSize="3xl" mt={1}>
                    <FaCode />
                  </Box>
                  <VStack align="flex-start" spacing={3}>
                    <Heading size="md">専門分野</Heading>
                    <Text color="gray.600" lineHeight="tall">
                      Webアプリのフルスタック開発を中心に幅広い技術領域に興味を持ち、日々学習を続けています。
                    </Text>
                  </VStack>
                </HStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" py={20} px={6}>
        <Container maxW="container.lg">
          <Heading size="xl" mb={12}>
            Skills
          </Heading>

          <VStack spacing={8} align="flex-start">
            <Box w="full">
              <HStack spacing={3} mb={4}>
                <Box color="brand.500" fontSize="2xl">
                  <FaCode />
                </Box>
                <Heading size="md">Languages</Heading>
              </HStack>
              <Flex gap={2} flexWrap="wrap">
                <Tag size="lg" colorScheme="blue">
                  <TagLeftIcon as={SiTypescript} />
                  <TagLabel>TypeScript</TagLabel>
                </Tag>
                <Tag size="lg" colorScheme="yellow">
                  <TagLeftIcon as={SiJavascript} />
                  <TagLabel>JavaScript</TagLabel>
                </Tag>
                <Tag size="lg" colorScheme="blue">
                  <TagLeftIcon as={FaPython} />
                  <TagLabel>Python</TagLabel>
                </Tag>
              </Flex>
            </Box>

            <Box w="full">
              <HStack spacing={3} mb={4}>
                <Box color="brand.500" fontSize="2xl">
                  <FaReact />
                </Box>
                <Heading size="md">Frontend</Heading>
              </HStack>
              <Flex gap={2} flexWrap="wrap">
                <Tag size="lg" colorScheme="cyan">
                  <TagLeftIcon as={FaReact} />
                  <TagLabel>React</TagLabel>
                </Tag>
                <Tag size="lg" colorScheme="gray">
                  <TagLeftIcon as={SiNextdotjs} />
                  <TagLabel>Next.js</TagLabel>
                </Tag>
              </Flex>
            </Box>

            <Box w="full">
              <HStack spacing={3} mb={4}>
                <Box color="brand.500" fontSize="2xl">
                  <FaServer />
                </Box>
                <Heading size="md">Backend</Heading>
              </HStack>
              <Flex gap={2} flexWrap="wrap">
                <Tag size="lg" colorScheme="green">
                  <TagLeftIcon as={FaNodeJs} />
                  <TagLabel>Node.js</TagLabel>
                </Tag>
              </Flex>
            </Box>

            <Box w="full">
              <HStack spacing={3} mb={4}>
                <Box color="brand.500" fontSize="2xl">
                  <FaCloud />
                </Box>
                <Heading size="md">Cloud & DevOps</Heading>
              </HStack>
              <Flex gap={2} flexWrap="wrap">
                <Tag size="lg" colorScheme="orange">
                  <TagLeftIcon as={FaAws} />
                  <TagLabel>AWS</TagLabel>
                </Tag>
                <Tag size="lg" colorScheme="blue">
                  <TagLeftIcon as={FaDocker} />
                  <TagLabel>Docker</TagLabel>
                </Tag>
                <Tag size="lg" colorScheme="red">
                  <TagLeftIcon as={FaGitAlt} />
                  <TagLabel>Git</TagLabel>
                </Tag>
              </Flex>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        id="projects"
        py={20}
        px={6}
        bg={colorMode === "dark" ? "gray.900" : "gray.50"}
      >
        <Container maxW="container.lg">
          <Heading size="xl" mb={12}>
            Projects
          </Heading>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Card>
              <CardBody>
                <Flex justify="space-between" align="flex-start" mb={4}>
                  <Heading size="md">Web Application</Heading>
                  <Box color="brand.500" fontSize="3xl">
                    <FaReact />
                  </Box>
                </Flex>
                <Text color="gray.600" mb={4} lineHeight="tall">
                  フルスタックのWebアプリケーション開発プロジェクト。認証機能、リアルタイム通信、データベース設計を実装。
                </Text>
                <Flex gap={2} flexWrap="wrap">
                  <Tag size="sm">React</Tag>
                  <Tag size="sm">TypeScript</Tag>
                  <Tag size="sm">Node.js</Tag>
                </Flex>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <Flex justify="space-between" align="flex-start" mb={4}>
                  <Heading size="md">Cloud Infrastructure</Heading>
                  <Box color="brand.500" fontSize="3xl">
                    <FaCloud />
                  </Box>
                </Flex>
                <Text color="gray.600" mb={4} lineHeight="tall">
                  スケーラブルなクラウドインフラの構築。CI/CD、コンテナ化、マイクロサービスアーキテクチャを採用。
                </Text>
                <Flex gap={2} flexWrap="wrap">
                  <Tag size="sm">Next.js</Tag>
                  <Tag size="sm">AWS</Tag>
                  <Tag size="sm">Go</Tag>
                </Flex>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={20} px={6}>
        <Container maxW="container.lg">
          <VStack spacing={6} textAlign="center">
            <Heading size="xl">Get In Touch</Heading>
            <Text fontSize="lg" color="gray.500" maxW="2xl">
              プロジェクトのご相談や、お仕事のご依頼など、お気軽にご連絡ください。
            </Text>
            <HStack spacing={4} flexWrap="wrap" justify="center">
              <Button
                as={Link}
                href="https://github.com/daiki0930"
                target="_blank"
                colorScheme="brand"
                size="lg"
                leftIcon={<FaGithub />}
                _hover={{ textDecoration: "none" }}
              >
                GitHub
              </Button>
              <Button
                as={Link}
                href="mailto:your-email@example.com"
                variant="outline"
                colorScheme="brand"
                size="lg"
                leftIcon={<FaEnvelope />}
                _hover={{ textDecoration: "none" }}
              >
                Email
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        py={8}
        px={6}
        borderTop="1px"
        borderColor={colorMode === "dark" ? "gray.800" : "gray.200"}
      >
        <Container maxW="container.lg">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={4}
          >
            <Text color="gray.500">
              &copy; 2025 Daiki.Kuroiwa. All rights reserved.
            </Text>
            <HStack spacing={6}>
              <Link
                href="https://github.com/daiki0930"
                target="_blank"
                color="gray.500"
                _hover={{ color: "brand.500" }}
              >
                <Box fontSize="2xl">
                  <FaGithub />
                </Box>
              </Link>
              <Link
                href="mailto:your-email@example.com"
                color="gray.500"
                _hover={{ color: "brand.500" }}
              >
                <Box fontSize="2xl">
                  <FaEnvelope />
                </Box>
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
