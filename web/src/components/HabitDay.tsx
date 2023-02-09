import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { ProgressBar } from './ProgressBar';

interface HabitDayProps {
  completed: number
  amount: number
};

export function HabitDay({ completed, amount }: HabitDayProps) {

  const completdPorcentage = Math.round((completed / amount) * 100);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background", {
          'bg-zinc-900 border-zinc-800': completdPorcentage === 0,
          'bg-violet-900 border-violet-500': completdPorcentage > 0 && completdPorcentage < 20,
          'bg-violet-800 border-violet-500': completdPorcentage >= 20 && completdPorcentage < 40,
          'bg-violet-700 border-violet-500': completdPorcentage >= 40 && completdPorcentage < 60,
          'bg-violet-600 border-violet-500': completdPorcentage >= 60 && completdPorcentage < 80,
          'bg-violet-500 border-violet-400': completdPorcentage >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className='min-w-[320px] w-full p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <span className='font-semibold text-zinc-400'>quinta-feira</span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'>09/02</span>

          <ProgressBar progress={completdPorcentage} />

          <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};