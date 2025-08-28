import { LucideIcon } from 'lucide-react-native'
import { TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  icon: LucideIcon
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function ButtonNavigation({
  icon: Icon,
  variant = 'primary',
  size = 'md',
  style,
  ...props
}: ButtonProps) {
  const variants = {
    primary: styles.primary,
    secondary: styles.secondary,
    ghost: styles.ghost
  }

  const sizes = {
    sm: styles.small,
    md: styles.medium,
    lg: styles.large
  }

  return (
    <TouchableOpacity
      style={[
        styles.button,
        variants[variant],
        sizes[size],
        style
      ]}
      {...props}
    >
      <Icon style={styles.icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
  },
  primary: {
    backgroundColor: '#8b5cf610',
  },
  secondary: {
    backgroundColor: '#27272a',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  small: {
    padding: 4,
  },
  medium: {
    padding: 8,
  },
  large: {
    padding: 12,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    color: '#fff'
  }
})
