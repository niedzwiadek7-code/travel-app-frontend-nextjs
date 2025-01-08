import React, {ReactNode} from "react";
import {Box, Breadcrumbs, useTheme} from "@mui/joy";
import {ChevronRightRounded} from "@mui/icons-material";

type Props = {
  elements: Array<ReactNode | string>
}

const HeaderPath: React.FC<Props> = ({
  elements
}) => {
  const { palette } = useTheme()
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Breadcrumbs
        size='sm'
        separator={<ChevronRightRounded fontSize='small' />}
        sx={{ pl: 0 }}
      >
        {elements.map((element, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: index === elements.length - 1 ? palette.primary['500'] : 'inherit',
              fontWeight: index === elements.length - 1 ? 'bold' : 'inherit',
            }}
          >
            {element}
          </Box>
        ))
        }
      </Breadcrumbs>
    </Box>
  )
}

export default HeaderPath
