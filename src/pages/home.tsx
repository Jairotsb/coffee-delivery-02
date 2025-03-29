import { useEffect } from 'react'

import { Container, Box, Text, Flex, Heading, useTheme } from '@chakra-ui/react'

import { CoffeeType, coffees } from '../assets/coffees/coffee'
import { CoffeeCard } from '../components/coffee-card'
import CoffeCup from '../assets/img/coffee-bg.png'

import { useGeolocation } from '../hooks/useGeolocation'

import { toast, ToastOptions } from 'react-toastify'
import { ArchiveBox, BoundingBox, Coffee, ShoppingCart, Timer } from 'phosphor-react'

export const TOAST_CONFIG: ToastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export function Home() {
  const theme = useTheme()
  const { getGeolocation, address } = useGeolocation()

  useEffect(() => {
    document.title = 'Coffee Delivery | Home'
  }, [])

  return (
    <Container as="main" py={8} maxWidth="100vw">
      <Container
        as="div"
        width="1100px"
        maxWidth="100%"
        my={{ base: 10, md: 20 }}
      >
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box width={{ base: '100%', md: '50%' }}>
            <Heading
              as="h1"
              fontFamily="'Baloo 2', cursive"
              fontWeight="700"
              fontSize={48}
              textAlign={['center', 'start']}
              lineHeight={1.3}
              color={theme.colors.base.title}
            >
              Encontre o café perfeito para qualquer hora do dia
            </Heading>
            <Text
              fontSize={16}
              textAlign={['center', 'start']}
              mt={4}
              color={theme.colors.base.subtitle}
            >
              Com{' '}
              <Text as="span" color={theme.colors.purple.dark}>
                O Coffee Delivery
              </Text>{' '}
              Você recebe seu café onde estiver, a qualquer hora
            </Text>

            <Flex
              mt={10}
              gap={4}
              justifyContent={{ base: 'center', md: 'flex-start' }}
            >
              <Box
                as="span"
                display="flex"
                alignItems="center"
                gap={2}
                fontSize={16}
                color={theme.colors.base.text}
                fontWeight="400"
                lineHeight={1.3}
                textAlign="left"
              >
                <Box
                  as="span"
                  width={6}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  height={6}
                  borderRadius="50%"
                  bg={theme.colors.yellow.dark}
                >
                  <ShoppingCart width={14} color="white" weight="fill" />
                </Box>
                <Text>Compra simples e segura</Text>
              </Box>
              <Box
                as="span"
                display="flex"
                alignItems="center"
                gap={2}
                fontSize={16}
                color={theme.colors.base.text}
                fontWeight="400"
                lineHeight={1.3}
                textAlign="left"
              >
                <Box
                  as="span"
                  width={6}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  height={6}
                  borderRadius="50%"
                  bg={theme.colors.base.subtitle}
                >
                  <ArchiveBox width={14} color="white" weight="fill" />
                </Box>
                <Text>Embalagem mantém o café seguro</Text>
              </Box>
            </Flex>
            <Flex
              mt={10}
              gap={4}
              justifyContent={{ base: 'center', md: 'flex-start' }}
            >
              <Box
                as="span"
                display="flex"
                alignItems="center"
                gap={2}
                fontSize={16}
                color={theme.colors.base.text}
                fontWeight="400"
                lineHeight={1.3}
                textAlign="left"
              >
                <Box
                  as="span"
                  width={6}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  height={6}
                  borderRadius="50%"
                  bg={theme.colors.yellow.medium}
                >
                  <Timer width={14} color="white" weight="fill" />
                </Box>
                <Text>Entrega rápida e rastreada</Text>
              </Box>
              <Box
                as="span"
                display="flex"
                alignItems="center"
                gap={2}
                fontSize={16}
                color={theme.colors.base.text}
                fontWeight="400"
                lineHeight={1.3}
                textAlign="left"
              >
                <Box
                  as="span"
                  width={6}
                  display={'flex'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  height={6}
                  borderRadius="50%"
                  bg={theme.colors.purple.dark}
                >
                  <Coffee width={14} color="white" weight="fill" />
                </Box>
                <Text>O café chega fresquinho até você</Text>
              </Box>
            </Flex>
          </Box>
          <Box mt={{ base: 10, md: 0 }}>
            <img src={CoffeCup} alt="" />
          </Box>
        </Flex>
      </Container>
      <Container as="div" width="1100px" maxWidth="100%">
        <Heading
          as="h1"
          fontFamily="'Baloo 2', cursive"
          fontWeight="700"
          fontSize={30}
          lineHeight={1.3}
          textAlign="left"
          mb={10}
          color={theme.colors.base.title}
        >
          Nossos Cafés
        </Heading>
        <Flex flexWrap="wrap" gap={10} justifyContent="flex-start">
          {coffees.map((coffee: CoffeeType) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </Flex>
      </Container>
    </Container>
  )
}
