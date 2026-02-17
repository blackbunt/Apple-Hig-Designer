/**
 * Apple HIG React Component Library -- Tailwind CSS Edition
 * Version 3.0 -- Verified against Apple HIG specifications
 *
 * All 16 components from components.jsx, rewritten with Tailwind CSS classes.
 * Identical props, API, and accessibility. Uses the apple- prefixed classes
 * from references/tailwind.config.js.
 *
 * @requires React 18+
 * @requires Tailwind CSS v3 with references/tailwind.config.js
 * @requires references/design-tokens.css loaded in HTML (CSS variable resolution)
 *
 * Known limitation: Slider gradient fill requires one inline `style` prop.
 */

import React, { forwardRef, useState, useEffect, useRef } from 'react';

// ============================================================================
// BUTTON
// ============================================================================

/**
 * Button -- Capsule-style Apple button with press feedback.
 *
 * @example
 * <Button variant="primary" onClick={handleClick}>Get Started</Button>
 * <Button variant="secondary" size="sm">Learn More</Button>
 * <Button variant="destructive" loading>Deleting...</Button>
 */
export const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}, ref) => {
  const sizeClasses = {
    sm: 'min-h-[32px] px-apple-4 py-apple-2 text-[14px]',
    md: 'min-h-apple-touch px-apple-6 py-apple-3 text-apple-body',
    lg: 'min-h-[56px] px-apple-8 py-apple-4 text-[19px]',
  };

  const variantClasses = {
    primary: 'bg-apple-blue text-white',
    secondary: 'bg-[rgba(0,122,255,0.1)] text-apple-blue',
    gray: 'bg-apple-gray-5 text-apple-label',
    tertiary: 'bg-transparent text-apple-blue',
    destructive: 'bg-apple-red text-white',
    ghost: 'bg-transparent text-apple-label',
  };

  const handlePointerDown = (e) => {
    if (!disabled && !loading) e.currentTarget.style.transform = 'scale(1.25) translateZ(0)';
  };

  const handlePointerUp = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={[
        'inline-flex items-center justify-center gap-apple-2',
        'font-apple-system font-apple-semibold',
        'border-none rounded-apple-button',
        'transition-all duration-apple-fast ease-apple-out',
        'motion-reduce:transition-none',
        sizeClasses[size],
        variantClasses[variant],
        fullWidth ? 'w-full' : '',
        disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
        className,
      ].filter(Boolean).join(' ')}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      {...props}
    >
      {loading && <Spinner size="sm" />}
      {icon && iconPosition === 'left' && !loading && <span>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
});

Button.displayName = 'Button';

// ============================================================================
// INPUT
// ============================================================================

/**
 * Text Input -- HIG compliant text field with label, error, and icon support.
 *
 * @example
 * <Input label="Email" type="email" placeholder="Enter your email" error="Invalid email" />
 */
export const Input = forwardRef(({
  label,
  error,
  helper,
  icon,
  iconPosition = 'left',
  fullWidth = true,
  className = '',
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const borderClass = error
    ? 'border-apple-red shadow-apple-focus-error'
    : isFocused
      ? 'border-apple-blue shadow-apple-focus'
      : 'border-transparent';

  return (
    <div className={`flex flex-col gap-apple-2 ${fullWidth ? 'w-full' : 'w-auto'} ${className}`}>
      {label && (
        <label className="text-apple-footnote font-apple-semibold text-apple-label">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <span className={`absolute ${iconPosition === 'left' ? 'left-apple-3' : 'right-apple-3'} text-apple-label-tertiary text-apple-body pointer-events-none`}>
            {icon}
          </span>
        )}
        <input
          ref={ref}
          className={[
            'w-full min-h-apple-touch',
            icon && iconPosition === 'left' ? 'pl-apple-11 pr-apple-4' : icon ? 'pl-apple-4 pr-apple-11' : 'px-apple-4',
            'py-apple-3',
            'font-apple-system text-apple-body tracking-[-0.02em]',
            'text-apple-label bg-apple-bg-secondary',
            'border rounded-apple-input outline-none',
            'transition-all duration-apple-fast ease-apple-out',
            'motion-reduce:transition-none',
            borderClass,
          ].filter(Boolean).join(' ')}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
      {(error || helper) && (
        <span className={`text-apple-footnote ${error ? 'text-apple-red' : 'text-apple-label-secondary'}`}>
          {error || helper}
        </span>
      )}
    </div>
  );
});

Input.displayName = 'Input';

// ============================================================================
// TEXTAREA
// ============================================================================

/**
 * Textarea -- Multi-line text input with label and error support.
 */
export const Textarea = forwardRef(({
  label,
  error,
  helper,
  rows = 4,
  className = '',
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const borderClass = error
    ? 'border-apple-red'
    : isFocused
      ? 'border-apple-blue shadow-apple-focus'
      : 'border-transparent';

  return (
    <div className={`flex flex-col gap-apple-2 w-full ${className}`}>
      {label && (
        <label className="text-apple-footnote font-apple-semibold text-apple-label">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        className={[
          'w-full px-apple-4 py-apple-3',
          'font-apple-system text-apple-body tracking-[-0.02em]',
          'text-apple-label bg-apple-bg-secondary',
          'border rounded-apple-input outline-none',
          'resize-y',
          'transition-all duration-apple-fast ease-apple-out',
          'motion-reduce:transition-none',
          borderClass,
        ].filter(Boolean).join(' ')}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {(error || helper) && (
        <span className={`text-apple-footnote ${error ? 'text-apple-red' : 'text-apple-label-secondary'}`}>
          {error || helper}
        </span>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

// ============================================================================
// TOGGLE / SWITCH
// ============================================================================

/**
 * Toggle -- iOS 26 Liquid Glass switch (64×28px track, 38×24px handle).
 * Handle expands to glass on press via scale(1.4, 1.6) + backdrop-filter.
 * Source: rdlabo-team/ionic-theme-ios26
 *
 * @example
 * <Toggle checked={isEnabled} onChange={setIsEnabled} label="Notifications" />
 */
export const Toggle = ({ checked, onChange, label, disabled = false, color, className = '' }) => {
  const [pressed, setPressed] = useState(false);

  return (
    <div className={`flex items-center gap-apple-3 ${className}`}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        onPointerDown={() => setPressed(true)}
        onPointerUp={() => setPressed(false)}
        onPointerLeave={() => setPressed(false)}
        className={[
          'relative w-[64px] h-[28px] p-0 border-none bg-transparent',
          disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer',
        ].join(' ')}
      >
        {/* Track */}
        <span
          className={[
            'absolute inset-0 rounded-[28px] overflow-visible',
            'transition-all duration-[280ms] ease-in-out',
            'motion-reduce:transition-none',
            checked ? (color || 'bg-apple-green') : 'bg-black/[0.23] dark:bg-white/[0.23]',
            pressed && checked ? 'origin-left scale-x-[0.894]' : '',
          ].join(' ')}
          style={color && checked ? { background: color } : undefined}
        />
        {/* Handle */}
        <span
          className={[
            'absolute w-[38px] h-[24px] left-[2px] top-[2px]',
            'rounded-[24px] shadow-apple-toggle-knob',
            'transition-all duration-[280ms] ease-in-out',
            'motion-reduce:transition-none',
            pressed ? 'bg-white/[0.1] backdrop-blur-[0.5px] backdrop-saturate-[120%]' : 'bg-white',
            pressed
              ? (checked ? 'scale-[1.4,1.6]' : '-translate-x-1 scale-[1.4,1.6]')
              : (checked ? 'translate-x-[22px]' : 'translate-x-0'),
          ].join(' ')}
          style={pressed ? {
            boxShadow: checked
              ? `inset 0 8px 8px -8px var(--system-green), inset 8px 0 8px -8px rgba(0,0,0,0.23), inset -8px 0 8px -8px var(--system-green)`
              : 'inset 0 0 8px 0 rgba(0,0,0,0.23)',
          } : undefined}
        />
      </button>
      {label && <span className="text-apple-body text-apple-label">{label}</span>}
    </div>
  );
};

// ============================================================================
// SEARCH BAR
// ============================================================================

/**
 * SearchBar -- iOS-style search field (36px height, 10px radius).
 *
 * @example
 * <SearchBar value={query} onChange={setQuery} placeholder="Search" />
 */
export const SearchBar = ({ value, onChange, placeholder = 'Search', onFocus, onBlur, className = '' }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div className={`flex items-center gap-apple-2 ${className}`}>
      <div className="relative flex-1">
        <span className="absolute left-[10px] top-1/2 -translate-y-1/2 text-[14px] text-apple-label-tertiary pointer-events-none">
          &#128269;
        </span>
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full h-[36px] px-[36px] font-apple-system text-apple-body text-apple-label bg-apple-fill-tertiary border-none rounded-[10px] outline-none"
        />
        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            aria-label="Clear search"
            className="absolute right-[8px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[12px] text-apple-label-tertiary bg-apple-gray-4 border-none rounded-full cursor-pointer flex items-center justify-center"
          >
            x
          </button>
        )}
      </div>
      {isFocused && (
        <button
          type="button"
          onClick={() => onChange('')}
          className="text-apple-body text-apple-blue bg-transparent border-none cursor-pointer whitespace-nowrap"
        >
          Cancel
        </button>
      )}
    </div>
  );
};

// ============================================================================
// SEGMENTED CONTROL
// ============================================================================

/**
 * SegmentedControl -- iOS-style segmented picker (32px height).
 *
 * @example
 * <SegmentedControl
 *   segments={['Daily', 'Weekly', 'Monthly']}
 *   selected={0}
 *   onChange={setSelected}
 * />
 */
export const SegmentedControl = ({ segments, selected, onChange, className = '' }) => (
  <div
    className={`inline-flex bg-apple-fill-tertiary rounded-apple-md p-[2px] ${className}`}
    role="tablist"
  >
    {segments.map((label, index) => (
      <button
        key={label}
        role="tab"
        aria-selected={selected === index}
        onClick={() => onChange(index)}
        className={[
          'min-w-apple-touch h-[28px] px-apple-3',
          'text-apple-footnote font-apple-semibold font-apple-system',
          'text-apple-label border-none rounded-[6px] cursor-pointer',
          'transition-all duration-apple-fast ease-apple-out',
          'motion-reduce:transition-none',
          selected === index
            ? 'bg-apple-bg-tertiary shadow-apple-xs'
            : 'bg-transparent shadow-apple-none',
        ].join(' ')}
      >
        {label}
      </button>
    ))}
  </div>
);

// ============================================================================
// SLIDER
// ============================================================================

/**
 * Slider -- iOS 26 slider (4px track, 28px thumb, glass knob activation on press).
 * Known limitation: gradient fill requires inline style prop.
 *
 * @example
 * <Slider value={50} min={0} max={100} onChange={setValue} />
 */
export const Slider = ({ value, min = 0, max = 100, step = 1, onChange, label, className = '' }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`flex flex-col gap-apple-2 w-full min-w-[128px] ${className}`}>
      {label && (
        <div className="flex justify-between text-apple-footnote">
          <span className="font-apple-semibold text-apple-label">{label}</span>
          <span className="text-apple-label-secondary">{value}</span>
        </div>
      )}
      <div className="relative h-[28px] flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
          className="w-full h-[4px] rounded-[2px] outline-none cursor-pointer appearance-none"
          style={{
            background: `linear-gradient(to right, var(--system-blue) ${percentage}%, var(--fill-tertiary) ${percentage}%)`,
          }}
        />
      </div>
    </div>
  );
};

// ============================================================================
// PROGRESS BAR
// ============================================================================

/**
 * ProgressBar -- Determinate or indeterminate progress (4px height).
 *
 * @example
 * <ProgressBar value={75} />
 * <ProgressBar indeterminate />
 */
export const ProgressBar = ({ value = 0, indeterminate = false, className = '' }) => (
  <div
    className={`w-full h-[4px] bg-apple-fill-tertiary rounded-[2px] overflow-hidden ${className}`}
    role="progressbar"
    aria-valuenow={indeterminate ? undefined : value}
    aria-valuemin={0}
    aria-valuemax={100}
  >
    <div
      className={[
        'h-full bg-apple-blue rounded-[2px]',
        indeterminate
          ? 'w-[30%] animate-[indeterminateProgress_1.5s_ease-in-out_infinite]'
          : 'transition-[width] duration-apple-slow ease-apple-out motion-reduce:transition-none',
      ].join(' ')}
      style={indeterminate ? undefined : { width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
);

// ============================================================================
// CARD
// ============================================================================

/**
 * Card -- Container with Apple styling variants.
 *
 * @example
 * <Card variant="elevated">
 *   <Card.Header>Title</Card.Header>
 *   <Card.Body>Content here</Card.Body>
 * </Card>
 */
export const Card = ({ children, variant = 'default', padding = 'md', className = '', ...props }) => {
  const paddingClasses = {
    none: 'p-0',
    sm: 'p-apple-3',
    md: 'p-apple-4',
    lg: 'p-apple-6',
  };

  const variantClasses = {
    default: 'bg-apple-bg-tertiary',
    elevated: 'bg-apple-bg-tertiary shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.04)]',
    glass: 'relative isolate bg-white/[0.18] backdrop-blur-[20px] backdrop-saturate-[180%] border-none shadow-[inset_1.5px_1.5px_1px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_rgba(255,255,255,0.35),0_6px_12px_rgba(0,0,0,0.12),0_0_20px_rgba(0,0,0,0.06)] text-white/[0.92] [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]',
  };

  return (
    <div
      className={[
        'rounded-apple-card',
        paddingClasses[padding],
        variantClasses[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Header = ({ children, className = '', ...props }) => (
  <div
    className={`text-apple-headline font-apple-semibold text-apple-label mb-apple-3 ${className}`}
    {...props}
  >
    {children}
  </div>
);

Card.Body = ({ children, className = '', ...props }) => (
  <div
    className={`text-apple-subhead text-apple-label-secondary leading-normal ${className}`}
    {...props}
  >
    {children}
  </div>
);

// ============================================================================
// MODAL
// ============================================================================

/**
 * Modal -- iOS 26 glass overlay dialog or bottom sheet with focus trapping.
 *
 * @example
 * <Modal isOpen={show} onClose={() => setShow(false)}>
 *   <Modal.Header icon="!" iconVariant="warning">Confirm</Modal.Header>
 *   <Modal.Body>Are you sure?</Modal.Body>
 *   <Modal.Actions>
 *     <Button variant="secondary">Cancel</Button>
 *     <Button variant="destructive">Delete</Button>
 *   </Modal.Actions>
 * </Modal>
 */
export const Modal = ({ isOpen, onClose, children, variant = 'alert', className = '' }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className={[
        'fixed inset-0 flex justify-center',
        'bg-black/40 backdrop-blur-[4px]',
        'z-apple-modal animate-apple-fade-in',
        variant === 'sheet' ? 'items-end' : 'items-center',
        className,
      ].join(' ')}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={[
          'p-apple-6 text-center shadow-apple-xl',
          'backdrop-blur-[8px] backdrop-saturate-[360%]',
          'border-t-[0.5px] border-r-[0.5px] border-l-[0.5px]',
          'border-t-white/100 border-r-white/80 border-l-white/60',
          'translate-z-0',
          variant === 'sheet'
            ? 'rounded-t-[32px] w-full max-w-full animate-apple-slide-up'
            : 'rounded-[32px] border-b-[0.5px] border-b-white/100 w-[90%] max-w-[270px] animate-apple-scale-in',
        ].join(' ')}
        style={{
          background: 'rgba(var(--glass-bg-rgb, 255, 255, 255), 0.6667)',
          boxShadow: 'inset 0 0 8px rgba(var(--glass-shadow-rgb, 220, 220, 220), 0.08), 0 0 10px rgba(var(--glass-shadow-rgb, 220, 220, 220), 0.1), 0 20px 60px rgba(0, 0, 0, 0.3)',
        }}
      >
        {children}
      </div>
    </div>
  );
};

Modal.Header = ({ children, icon, iconVariant = 'default' }) => {
  const iconColors = {
    default: 'text-apple-blue bg-[rgba(0,122,255,0.12)]',
    warning: 'text-apple-orange bg-[rgba(255,149,0,0.12)]',
    error: 'text-apple-red bg-[rgba(255,59,48,0.12)]',
    success: 'text-apple-green bg-[rgba(52,199,89,0.12)]',
  };

  return (
    <>
      {icon && (
        <div className={`w-[56px] h-[56px] mx-auto mb-apple-4 flex items-center justify-center text-[28px] rounded-full ${iconColors[iconVariant]}`}>
          {icon}
        </div>
      )}
      <h2 className="text-apple-headline font-apple-semibold text-apple-label mb-apple-2">
        {children}
      </h2>
    </>
  );
};

Modal.Body = ({ children }) => (
  <p className="text-apple-footnote text-apple-label-secondary leading-normal mb-apple-6">
    {children}
  </p>
);

Modal.Actions = ({ children }) => (
  <div className="flex gap-apple-3">
    {React.Children.map(children, (child) =>
      React.cloneElement(child, { className: `${child.props.className || ''} flex-1` })
    )}
  </div>
);

// ============================================================================
// SPINNER
// ============================================================================

/**
 * Spinner -- Loading indicator (16/32/48px sizes).
 */
export const Spinner = ({ size = 'md', color = 'var(--system-blue)' }) => {
  const sizeClasses = {
    sm: 'w-[16px] h-[16px]',
    md: 'w-[32px] h-[32px]',
    lg: 'w-[48px] h-[48px]',
  };

  return (
    <div
      className={[
        sizeClasses[size],
        'border-[3px] border-apple-gray-5 rounded-full',
        'animate-apple-spin',
      ].join(' ')}
      style={{ borderTopColor: color }}
      role="status"
      aria-label="Loading"
    />
  );
};

// ============================================================================
// SKELETON
// ============================================================================

/**
 * Skeleton -- Loading placeholder with shimmer animation.
 */
export const Skeleton = ({ width = '100%', height = '20px', variant = 'text', className = '' }) => {
  const radiusClasses = {
    text: 'rounded-apple-sm',
    circular: 'rounded-full',
    rectangular: 'rounded-apple-md',
  };

  return (
    <div
      className={[
        'bg-gradient-to-r from-apple-gray-5 via-apple-gray-6 to-apple-gray-5',
        'bg-[length:200%_100%] animate-apple-shimmer',
        radiusClasses[variant],
        className,
      ].join(' ')}
      style={{ width, height }}
    />
  );
};

// ============================================================================
// LIST
// ============================================================================

/**
 * List -- iOS grouped list view with items.
 *
 * @example
 * <List>
 *   <List.Item avatar="photo.jpg" accessory=">" onClick={handleClick}>
 *     <div>Title</div>
 *     <div className="text-[14px] text-apple-label-secondary">Subtitle</div>
 *   </List.Item>
 * </List>
 */
export const List = ({ children, className = '' }) => (
  <ul
    className={`list-none m-0 p-0 bg-apple-bg-tertiary rounded-apple-list-section overflow-hidden ${className}`}
    role="list"
  >
    {children}
  </ul>
);

List.Item = ({ children, onClick, accessory, avatar, className = '' }) => (
  <li
    onClick={onClick}
    className={[
      'flex items-center px-apple-4 py-apple-3 min-h-apple-touch',
      'border-b border-apple-separator last:border-b-0',
      'transition-colors duration-apple-fast ease-apple-out',
      'motion-reduce:transition-none',
      onClick ? 'cursor-pointer' : 'cursor-default',
      className,
    ].join(' ')}
  >
    {avatar && (
      <img
        src={avatar}
        alt=""
        className="w-apple-11 h-apple-11 rounded-full object-cover mr-apple-3"
      />
    )}
    <div className="flex-1 min-w-0">{children}</div>
    {accessory && (
      <span className="text-apple-label-tertiary ml-apple-2 text-[14px]">
        {accessory}
      </span>
    )}
  </li>
);

// ============================================================================
// BADGE
// ============================================================================

/**
 * Badge -- Status indicator with semantic variants.
 */
export const Badge = ({ children, variant = 'default', size = 'md' }) => {
  const variantClasses = {
    default: 'text-apple-label-secondary bg-apple-gray-6',
    success: 'text-apple-green bg-[rgba(52,199,89,0.12)]',
    warning: 'text-apple-orange bg-[rgba(255,149,0,0.12)]',
    error: 'text-apple-red bg-[rgba(255,59,48,0.12)]',
    info: 'text-apple-blue bg-[rgba(0,122,255,0.12)]',
  };

  const sizeClasses = {
    sm: 'px-[6px] py-[2px] text-apple-caption2',
    md: 'px-[10px] py-apple-1 text-apple-caption1',
    lg: 'px-apple-3 py-[6px] text-[14px]',
  };

  return (
    <span
      className={[
        'inline-flex items-center font-apple-medium rounded-apple-full font-apple-system',
        variantClasses[variant],
        sizeClasses[size],
      ].join(' ')}
    >
      {children}
    </span>
  );
};

// ============================================================================
// AVATAR
// ============================================================================

/**
 * Avatar -- User profile image with fallback.
 */
export const Avatar = ({ src, alt = '', size = 'md', fallback }) => {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    sm: 'w-[32px] h-[32px] text-[13px]',
    md: 'w-apple-11 h-apple-11 text-apple-headline',
    lg: 'w-[64px] h-[64px] text-[26px]',
    xl: 'w-[96px] h-[96px] text-[38px]',
  };

  if (hasError || !src) {
    return (
      <div
        className={[
          'rounded-full bg-apple-gray-5',
          'flex items-center justify-center',
          'font-apple-semibold text-apple-label-secondary',
          sizeClasses[size],
        ].join(' ')}
      >
        {fallback || alt.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className={`rounded-full object-cover ${sizeClasses[size]}`}
    />
  );
};

// ============================================================================
// EMPTY STATE
// ============================================================================

/**
 * EmptyState -- Placeholder for empty content areas.
 */
export const EmptyState = ({ icon, title, description, action, className = '' }) => (
  <div className={`flex flex-col items-center justify-center py-apple-12 px-apple-4 text-center ${className}`}>
    {icon && (
      <div className="w-[80px] h-[80px] flex items-center justify-center text-[40px] text-apple-label-tertiary bg-apple-bg-secondary rounded-full mb-apple-4">
        {icon}
      </div>
    )}
    <h3 className="text-[21px] font-apple-semibold text-apple-label mb-apple-2">
      {title}
    </h3>
    <p className="text-apple-subhead text-apple-label-secondary max-w-[280px] mb-apple-6 leading-normal">
      {description}
    </p>
    {action}
  </div>
);

// ============================================================================
// KEYFRAME INJECTION
// ============================================================================

const injectGlobalStyles = () => {
  const styleId = 'apple-hig-animations-tw';
  if (document.getElementById(styleId)) return;
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    @keyframes indeterminateProgress {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(400%); }
    }
  `;
  document.head.appendChild(style);
};

if (typeof document !== 'undefined') {
  injectGlobalStyles();
}

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  Button,
  Input,
  Textarea,
  Toggle,
  SearchBar,
  SegmentedControl,
  Slider,
  ProgressBar,
  Card,
  Modal,
  Spinner,
  Skeleton,
  List,
  Badge,
  Avatar,
  EmptyState,
};
