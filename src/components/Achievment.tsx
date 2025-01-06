'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Crown, Star } from 'lucide-react';

const achievements = [
  {
    key: 'Opening Success',
    description: 'Opened with over 200 active Discord members',
    icon: <Crown className="w-8 h-8" />,
    stat: '200+'
  },
  {
    key: 'Growth',
    description: 'Focused on community building and increasing participation in tournaments.',
    icon: <Star className="w-8 h-8" />,
    stat: 'Future'
  },
  {
    key: 'Tournament Highlights',
    description: 'Top 10 finishes in Fortnite Tournaments in 2025.',
    icon: <Trophy className="w-8 h-8" />,
    stat: '?'
  },
  {
    key: 'Community Events',
    description: 'Regular internal tournaments and game nights to engage the community.',
    icon: <Target className="w-8 h-8" />,
    stat: '20+'
  }
];

export function Achievements() {

  return (
    <section className="py-20 bg-gray-400">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-white mb-4">
            Our achievements for the future
          </h2>
          <p className="text-black-400">
            Strong together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black/20 rounded-xl p-6 text-center"
            >
              <div className="text-black-400 mb-4 flex justify-center">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {achievement.stat}
              </h3>
              <h4 className="text-lg font-semibold text-black-400 mb-2">
                {achievement.key}
              </h4>
              <p className="text-black-400">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}